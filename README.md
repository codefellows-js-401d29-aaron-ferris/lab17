
![CF](http://i.imgur.com/7v5ASc8.png)17 LAB
=================================================

## TCP CHAT SERVER

### Author: Aaron Ferris

### Links and Resources
* [PR](https://github.com/codefellows-js-401d29-aaron-ferris/lab17/pull/1)  
* [travis](https://www.travis-ci.com/codefellows-js-401d29-aaron-ferris/lab17) ![build](https://www.travis-ci.com/codefellows-js-401d29-aaron-ferris/lab17.svg?branch=master)  
  
  
#### Documentation
* [jsdoc](https://github.com/codefellows-js-401d29-aaron-ferris/lab17/tree/submission/docs)  

### Modules
#### `app.js`
##### Exported Values and Methods

###### `client.connect`
 * Connects our socket to server 3001 in localhost

###### `saveFile`
 * Connects our socket to server 3001 in localhost

###### `convertBuffer`
 * takes in buffer. 
 * converts it to a string and uppercase

###### `savedMsg`
 * Takes in file
 * writes to server file was saved
 * terminates connection

###### `throwErr`
 * Takes in error
 * logs the error
 * terminates connection

###### `alterFile`
 * takes in file
 * runs loadfile
 * then runs convertbuffer
 * then runs savefile
 * then runs savedmsg
 * if error runs throwErr

###### `loadFile`
 * takes promisified readFile
 * makes it a function that is testable

#### `logger.js`
##### Exported Values and Methods

###### `client.connect`
 * Connects our socket to server 3001 in localhost

###### `client.on`
 * changes text into an event and a payload
 * if event is an error, console.error the payload
 * if event is a saved, console.log the payload

#### `server.js`
##### Exported Values and Methods

###### `server.listen`
 * listens on a port
 * logs what port its up on

 ###### `server.on`
 * sets a id for a socket that oconnects.
 *  when a socket is closed, deletes it
 * if data is sent from socket its uses dispatch event

 ###### `dispatchEvent`
 * changes the buffer into a string
 * splits string into event and payload
 * writes to each socket the event and the payload

### Setup
#### Requirements
* run a npm i in the base folder


#### Running the app
* in base folder run
  * `nodemon`
  * `nodemon logger.js`
  * run command to execute
  *  `node app.js _filename_`
  *  example `node app.js ./files/test.txt`
  
#### Tests
* Based on time, I didn't get to testing

#### UML
![UML](./files/uml.jpg)



