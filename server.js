var port = process.env.PORT || 8080;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello Get Request!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello Post Request!"
  });
});

app.listen(port);
module.exports = app;
