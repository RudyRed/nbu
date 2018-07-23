console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body,
  };

  try {
    notes = JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {

  }

  const duplicateNotes = notes.filter(x => x.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

const getAll = () => {
  console.log('getting all notes');
}

const getNote = title => {
  console.log(`getting note ${title}`);
}

const removeNote = title => {
  console.log(`removing note ${title}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
}
