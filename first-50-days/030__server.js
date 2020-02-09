// 1/9/2020
// node is so cool!

const net = require('net');

const server = net.createServer();
const connectedClients = [];

server.listen({
    host: 'localhost',
    port: 8080,
})

server.on('connection', (client) => {
    console.log('client connected');
    client.write('welcome to the server');
    connectedClients.push(client);
})

setInterval(() => {
    const now = new Date().toISOString();
    connectedClients.forEach(client => {
        client.write(now);
    });
}, 2000);