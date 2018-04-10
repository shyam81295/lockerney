var express = require('express');                                                                                         
var path = require('path');                                                                                               
var bodyParser = require('body-parser');                                                                                  
var AWS = require('aws-sdk');                                                                                             
var app = express();                                                                                                      
var request = require('request');
var cryptico = require('cryptico');                                                                                         
awsConfig = {                                                                                                             
    "region": "us-west-2",                                                                                                
    "endpoint": "http://dynamodb.us-west-2.amazonaws.com",                                                                
    "accessKeyId": "AKIAINIO42W5PVBWMGXQ", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
app.use(bodyParser());
//cmd.run('openssl genrsa -out my-server.key.pem 2048');
//Static folder directory for storing css,js
app.use(express.static(path.join(__dirname,'html')))
app.get('/',function(req,res) {
//cmd.run('openssl rsa -in my-server.key.pem -pubout -out my-server.pub');
    res.sendFile('index.html');
    //res.end(JSON.stringify(req.query)
})
app.post('/',function(req,res) {
    
    JSON.stringify(req.body);
    console.log(req.body);
var options = {
  uri: 'http://localhost:3000/api/User',
  method: 'POST',
  json: {
  "$class": "org.lockerney.main.User",
  "userId": req.body.userid,
}
  
};

request(options, function (error, response, body) {
//console.log(response.statusCode) ;
app.use(express.static(path.join(__dirname,'html')))
  //app.get('/',function(req,res) {
    //res.sendFile('aa.html');
    //res.end(JSON.stringify(req.query)
// The passphrase used to repeatably generate this RSA key.
var PassPhrase = "The Moon is a Harsh Mistress."; 
// The length of the RSA key, in bits.
var Bits = 1024; 
var MattsRSAkey = cryptico.generateRSAKey(PassPhrase, Bits);
var MattsPublicKeyString = cryptico.publicKeyString(MattsRSAkey);       
console.log('Encrypt with Public');
msg_addr = cryptico.encrypt(req.body.line1, MattsPublicKeyString);
//console.log(typeof msg,'\n');
//console.log('encrypted', msg_addr, '\n');

//console.log('Decrypt with Private');
//msg = key.decrypt(msg_addr, 'base64', 'utf8');
//console.log('decrypted', msg_addr, '\n');
msg_dob =cryptico.encrypt(req.body.dob, MattsPublicKeyString);
msg_mail =cryptico.encrypt(req.body.email, MattsPublicKeyString);
msg_name =cryptico.encrypt(req.body.name, MattsPublicKeyString);
msg_ssn =cryptico.encrypt(req.body.ssno, MattsPublicKeyString);
msg_tele =cryptico.encrypt(req.body.mobno, MattsPublicKeyString);
  if (!error && response.statusCode == 200) {
    console.log(response.statusCode) // Print the shortened url.
    var params = {
  TableName: 'privatedata',
  Item: {
    'id' : {N:req.body.userid },
    'address' : {S: msg_addr.cipher},
    'dob':{S:msg_dob.cipher},
    'email':{S:msg_mail.cipher},
    'name':{S:msg_name.cipher},
    'ssn':{S:msg_ssn.cipher},
    'telephone':{S:msg_tele.cipher}
  }
  };
  ddb.putItem(params, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      console.log(cryptico.decrypt(msg_mail.cipher, MattsRSAkey).plaintext);
      res.send("Registration successfull!!Congratulation with user id "+req.body.userid);
    }
  });
  }
  else
  {
    res.send("User with id "+req.body.userid+" already exists in blockchain");
  }
  });
  });
  app.listen(1338,function(params) {
      console.log('I am listening at 1338');
  
  })
  
  
