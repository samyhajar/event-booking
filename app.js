const express = require('express');
const bodyParser = require('body-parser');
const { restart } = require('nodemon');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.listen(3000);
