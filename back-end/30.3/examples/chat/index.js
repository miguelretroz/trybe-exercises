const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const sockets = require('./sockets');

app.use(express.static(__dirname + '/public'));

sockets.chat(io);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log('listening on port', PORT));