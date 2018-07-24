console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const { argv } = require('yargs');

const notes = require('./notes.js');

const command = argv._[0];
console.log(`Command: ${command}`);
console.log('Yargs', argv);

if (command === 'add') {

  const note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log('Note Created');
    notes.logNote(note);
  } else {
    console.log('Note title already in use');
  }

} else if (command === 'remove') {

  const noteRemoverd = notes.removeNote(argv.title);
  const message = noteRemoverd ? 'Note was removed' : 'Note not found';
  console.log(message);

} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {

  const note = notes.getNote(argv.title);

  if (note) {
    console.log('Note Read');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }

} else {
  console.log('command not recognized');
}
