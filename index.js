'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('', function(request, response) {
  console.log("### POST ###");
  const body = request.body;
  console.log("### BODY ### %s", JSON.stringify(body));
});

var server = app.listen(3001, function() {
  console.log("Listening at port 3001");
})
