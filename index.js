'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3001;
var Http = require('http');

app.use(bodyParser.json());

app.post('', function(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  const body = request.body;
  response.end(JSON.stringify(body));
});

var server = app.listen(port, function() {
  console.log("Server it's up and running at http://localhost:" + port);
})

var proxied = Http.request({
  host: '121.8.98.202',
  port: 8080,
  method: 'GET',
  path: 'http://www.estrela.com.br//'
}, function(response){
  response.on('data', function(data){
    console.log(data.toString());
  });
});

proxied.end();
