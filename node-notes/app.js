console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const command = process.argv[2];
// console.log(process.argv);
console.log(`Command: ${command}`);

if (command === 'add') {
  console.log('adding new note');
} else if (command === 'remove') {
  console.log('Removing Note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else {
  console.log('command not recognized');
}
