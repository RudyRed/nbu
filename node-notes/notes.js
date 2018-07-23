console.log('Starting notes.js');

const addNote = (title, body) => {
  console.log('addNote', title, body);
}

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
