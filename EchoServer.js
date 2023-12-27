const net = require('node:net');

/* whenever a new client creates a connection to the server, the server creates a 
 * socket object for the client and the callback
 * passed to net.createServer() is called with the created socket for that client
*/
const server = net.createServer((socket) => {
    console.log("Connection from", socket.remoteAddress, "port:", socket.remotePort)

    socket.on("data", (buffer) => {
        socket.write(`${buffer.toString("utf-8")}\n`)
    })
    socket.on("end", () => {
        console.log("Closed", socket.remoteAddress, "port:", socket.remotePort)
    })
});

server.listen(8778);