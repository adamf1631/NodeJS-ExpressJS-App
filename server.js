const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

const people = [
  {
    name: "Bob",
    age: "45",
    location: "Philadelphia",
  },
  {
    name: "Nancy",
    age: "52",
    location: "New York",
  },
  {
    name: "Rodd",
    age: "25",
    location: "New Castle",
  }
];

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'))

// GET method route
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})


app.get('/api/info', function (req, res) {
  res.json(people);
})






app.listen(port, () => console.log(`App on Port: ${port}`));
