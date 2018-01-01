var express = require('express');
var app = express();

//Serving the static files
app.use('/', express.static(__dirname + '/nikunj'));

//Starting the server
app.listen(3000, function () {
  console.log('nikunj profile web is listening on port 3000!');
});
