'use strict';
/**
 * @module server.js
 */
const net = require('net');

const port = process.env.PORT || 3001;
const server = net.createServer();
/**
 * listens on a port
 * logs what port its up on
 */
server.listen(port, () => console.log(`Server up on ${port}`) );

let socketPool = {};
/**
 * sets a id for a socket that oconnects.
 *  when a socket is closed, deletes it, 
 * if data is sent from socket its uses dispatch event
 */
server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id] = socket;

  socket.on('data', (buffer) => dispatchEvent(buffer));

  socket.on('close', () => {
    delete socketPool[id];
  });
});
/**
 * changes the buffer into a string
 * splits string into event and payload
 * writes to each socket the event and the payload
 */
let dispatchEvent = (buffer) => {
  let text = buffer.toString().trim();
  let [event,payload] = text.split(/\s+(.*)/)
  console.log(event)
  for (let socket in socketPool) {
    socketPool[socket].write(`${event} ${payload}\n`);
  }
};


