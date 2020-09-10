'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer = require('multer')
var upload = multer()
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.any(), function(req, res){
  let file = req.files[0];
  
  let responseObj = {};
  responseObj.name = file.originalname;
  responseObj.type = file.mimetype;
  responseObj.size = file.size;
  res.json(responseObj)
  // res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
