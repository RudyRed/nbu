console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// const { username } = os.userInfo();
// const text = `Hello ${username}!`;
//
//
// fs.appendFile('greetings.txt', text, (err) => {
//   if (err) throw err;
//   console.log(`The text "${text}" was appended to the file!`);
// });
console.log(notes.add(2, 6));
