const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions =  {
  describe: 'Title of note',
  demand: true,
  alias: 't',
};
const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b',
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'List all notes')
  .command('read', 'Read a notes', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .help()
  .argv;
const command = argv._[0];

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
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note${allNotes.length > 1 ? 's' : ''}.`);
  allNotes.forEach(note => notes.logNote(note));
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
