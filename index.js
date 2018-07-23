var express = require('express');
var app = express();

//Serving the static files
app.use('/', express.static(__dirname + '/nikunj'));

//Starting the server
var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("nikunj profile web is listening on port ", port);
});