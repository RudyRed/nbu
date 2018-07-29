const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('helloworld');
});

app.listen('3000');
