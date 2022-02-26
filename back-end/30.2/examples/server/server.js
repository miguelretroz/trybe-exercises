const net = require('net');

const server = net.createServer((connection) => {
  console.log('Cliente connectado');

  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  connection.on('data', (data) => {
    console.log(data.toString());
  });

  server.getConnections((err, count) => console.log(count));

  connection.write('Mensagem do servidor!\r\n');
  connection.pipe(connection);
});

server.listen(8080, () => {
  console.log('Servidor escutando na porta 8080');
});
