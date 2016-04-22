const express = require('express');
const server = express();
const jsonParser  = require('body-parser').json();

// Load data fixtures
const data = require('./data.json');

// Expose static content
server.use(express.static('.'));

// API routes

server.get('/api/v1/numbers', function(req, res) {
  res.json(data.numbers).end();
});

server.get('/api/v1/numbers/:id', function(req, res) {
  const number = data.numbers.find(n => n.id === Number(req.params.id));
  if (number) {
    res.json(number).end();
  } else {
    res.status(404).end();
  }
});

server.post('/api/v1/numbers/:id/comments', jsonParser, function(req, res) {
  const number = data.numbers.find(n => n.id === Number(req.params.id));
  if (number) {
    number.comments.unshift(req.body);
    res.status(201).end();
  } else {
    res.status(404).end();
  }
});

server.post('/api/v1/login', jsonParser, function(req, res) {
  // Just accept whatever they provide, echoing back their username
  res.json({username: req.body.username}).end();
});

// Start server
server.listen(3000, function() {
  console.log('Listening on localhost:3000');
});
