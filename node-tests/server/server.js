const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'app',
  });
});

app.listen(3000);

module.exports = {
  app,
};
