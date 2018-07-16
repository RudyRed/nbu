console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const _ = require('lodash');

const notes = require('./notes.js');

// const { username } = os.userInfo();
// const text = `Hello ${username}!`;
//
//
// fs.appendFile('greetings.txt', text, (err) => {
//   if (err) throw err;
//   console.log(`The text "${text}" was appended to the file!`);
// });

// console.log(notes.add(2, 6));

const filteredArray = _.uniq([1, 2, 1, 3, 4, 5, 1, 1, 1]);
console.log(filteredArray);
