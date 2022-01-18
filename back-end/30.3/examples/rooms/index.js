const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

require('./sockets/rooms')(io);

app.use(express.static(__dirname + '/public'));

app.get('/')

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log('listen on port ' + PORT));
