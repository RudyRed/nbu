const fs = require('fs');

const originalNote = {
  title: 'title goes here',
  body: 'body goes here',
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

const note = JSON.parse(fs.readFileSync('notes.json'));

console.log(typeof note);
console.log(note.title);
