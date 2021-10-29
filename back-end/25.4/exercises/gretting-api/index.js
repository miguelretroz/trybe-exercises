const express = require('express');

const app = express();

const PORT = 3000;

app.get('/ping', (_req, res) => res.status(200).json({ messsage: 'pong' }));

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT} `));