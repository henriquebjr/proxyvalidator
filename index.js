'use strict';

var express = require('express');
var app = express();

app.use(express.bodyParser());

app.post('', function(request, response) {
  console.log("### POST ###");
  console.log(request.body);
});

var server = app.listen(3001, function() {
  console.log("Listening at port 3001");
})
