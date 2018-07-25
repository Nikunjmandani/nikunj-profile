var express = require('express');
var request = require('request');
bodyParser = require('body-parser');
path = require('path');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Serving the static files
app.use('/', express.static(__dirname + '/nikunj'));

//for  sending email

app.post('/form', function (req, res) {
  //Now take the value from the request and then set it in the email form data so that mail    
  //can be sent accordingly.  

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('');
  const msg = {
    to: 'nikunj.mandani@gmail.com',
    from: 'nikunj.turtleinfotech@gmail.com ',
    subject: req.body.phone+'CLIENT: '+req.body.fname+' wants to contact You',
    text: 'Hi Nikunj,\n'+
             'My Self '+req.body.fname+'\n'+
             'Contact me on '+req.body.email+'\n'+
             'Can You tell me '+req.body.message,
   // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
res.sendStatus(200);
});

//Starting the server
var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("nikunj profile web is listening on port ", port);
});