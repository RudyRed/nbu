console.log('Starting app.');

const fs = require('fs');
const os = require('os');

const { username } = os.userInfo();
const text = `Hello ${username}!`;


fs.appendFile('greetings.txt', text, (err) => {
  if (err) throw err;
  console.log(`The text "${text}" was appended to the file!`);
});
