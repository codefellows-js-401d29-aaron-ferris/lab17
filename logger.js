'use strict';
/**
 * @module logger.js
 */
const net = require('net');
const client = new net.Socket();
/**
 * connects to server at localhost 3001
 */
client.connect(3001, 'localhost', () => {});
 

/**
 * changes text into an event and a payload
 * if event is an error, console.error the payload
 * if event is a saved, console.log the payload
 */
client.on('data', (buffer) => {
  let text = buffer.toString().trim();
  let [event,payload] = text.split(/\s+(.*)/)
  console.log(event)
  if( event === 'error' ){
    console.error( payload)
  }
  if(event === 'saved')
  console.log( payload )
})

client.on('close', () => {
  console.log('Connection Closed')
  }
);