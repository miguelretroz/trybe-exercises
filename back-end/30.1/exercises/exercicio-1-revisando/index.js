const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', require('./controllers/joke').listJokes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
