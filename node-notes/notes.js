console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body,
  };

  const duplicateNotes = notes.filter(x => x.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('getting all notes');
};

const getNote = title => fetchNotes().filter(x => x.title === title)[0];

const removeNote = title => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter(x => x.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

const logNote = ({title, body}) => {
  debugger;
  console.log(' ');
  console.log(`Title: ${title}`);
  console.log(`Body: ${body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
};
