'use strict';
/**
 * @module app.js
 */

const net = require('net');
const client = new net.Socket()
/**
 * Connects our socket to server 3001 in localhost
 */
client.connect(3001, 'localhost', () => {})


const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


/**
 * takes promisified readFile
 * makes it a function that is testable
 */
const loadFile = (file) => readFile(file);

/**
 * takes promisified write
 * makes it a function that is testable
 */
const saveFile = (file, buffer) => writeFile(file, buffer);

/**
 * takes in buffer. 
 * converts it to a string and uppercase
 */
const convertBuffer = (buffer) =>Buffer.from(buffer.toString().trim().toUpperCase())

/**
 * Takes in file
 * writes to server file was saved
 * terminates connection
 */
const savedMsg = (file) => {
  client.write(`saved ${file} was saved`);
  client.end();
}

/**
 * Takes in error
 * logs the error
 * terminates connection
 */
const throwErr = (err) =>{
  client.write(`error ${err}`);
  client.end();
}
/**
 * takes in file
 * runs loadfile
 * then runs convertbuffer
 * then runs savefile
 * then runs savedmsg
 * if error runs throwErr
 */
const alterFile = (file) => {
  return loadFile(file)
    .then( (buffer) => {return convertBuffer(buffer)} )
    .then( (buffer) => { return saveFile(file,buffer)} )
    .then( (success) => {return savedMsg(file)} )
    .catch( (error) => throwErr(error) );
  
}

let file = process.argv.slice(2).shift();
alterFile(file)

