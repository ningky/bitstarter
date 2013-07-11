var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var message;

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  message=data;
});

app.get('/', function(request, response) {
  response.send(message.toString('utf-8',0,message.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
