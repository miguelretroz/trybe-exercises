const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');
const errorMiddleware = require('./errorMiddleware');

const app = express();

const PORT = 3000;

// app.get('/:filename', async (req, res, next) => {
//   try {
//     const file = await fs.readFile(`./${req.params.filename}`);
//     res.send(file.toString('utf-8'));
//   } catch (err) {
//     next(err);
//   }
// });

app.get(
  '/:filename',
  [
    rescue(
      async (req, res) => {
        const file = await fs.readFile(`./${req.params.filename}`);
        res.send(file.toString('utf-8'));
      },
    ),
    (err, req, res, next) => {
      if (err.code === 'ENOENT') {
        const newError = new Error(err.message);
        newError.code = 'file_not_found';
        newError.status = 404;
        return next(newError);
      }

      return next(err);
    },
  ],
);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});