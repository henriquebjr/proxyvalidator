'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3001;
var http = require('http');

app.use(bodyParser.json());

app.post('', function(request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  const body = request.body;
  response.end(JSON.stringify(body));
});

var server = app.listen(port, function() {
  console.log("Server it's up and running at http://localhost:" + port);
})

var proxied = http.get({
  host: '122.224.227.202',
  port: 3128,
  method: 'GET',
  path: 'http://xxxx.org/'
}, function(response){
  console.log("###");
  response.on('data', function(data){
    console.log(data.toString());
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});;

proxied.end();
