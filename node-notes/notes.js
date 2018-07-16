console.log('Starting notes.js');

const addNote = () => {
  console.log('addNote');
  return 'New note';
}

const add = (a, b) => a + b;

module.exports = {
  addNote,
  add,
}
