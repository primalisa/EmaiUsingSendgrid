var express = require('express');
var bodyParser = require('body-parser');
var app     = express();
//const sgMail= require('@sendgrid/mail'); 

const API_KEY= ""; //add apikey from sendgrid

sgMail.setApiKey(API_KEY);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/myaction', function(req, res) {
 if(req.body.message ==="")
 {
   m=" "
 }
 else
 {
   m=req.body.message;
 }
    const message= {
            to : req.body.name,
            from: {
                name:"Prima Lisha",
                email:req.body.from
              },
            subject:req.body.subject,
            text:m,


    };
    sgMail.send(message)
    .then((response) =>  res.send("<center><div style='margin-top:30px;border:2px solid black;border-radius:25px;width:400px;height:100px;background-color:#C0D8C0;'><h1>Email was sent</h1></div></center>"))
    .catch((error) => res.send(error));


});
app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});
