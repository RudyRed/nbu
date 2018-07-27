const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Will',
    likes: [
      'Ponies',
      'RL Grime',
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'uh oh',
  });
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
