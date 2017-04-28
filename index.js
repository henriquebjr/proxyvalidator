'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('', function(request, response) {
  console.log("### POST ###");
  const body = request.body;
  console.log("### BODY ### %s", JSON.stringify(body));
  response.end(JSON.stringify(body));
});

var server = app.listen(port, function() {
  console.log("Server it's up and running at http://localhost:" + port);
})
