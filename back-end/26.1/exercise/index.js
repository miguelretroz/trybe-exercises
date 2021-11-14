const express = require('express');
const bodyParser = require('body-parser');

const errorHandler = require('./controller/errorHandler');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
