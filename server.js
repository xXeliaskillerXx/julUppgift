const path = require('path');
const express = require('express');
const app = express()
const port = 3000
const mysql = require('mysql');
const connect = require('./connect.js');
const ejs = require('ejs');



//____________________________________________________________________________________________________________________________
app.use('/static', express.static ('public'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'./index.html'));
});
app.get('/random', function(req,res){
  res.render(__dirname + "/index.ejs",{
    x: x = Math.floor(Math.random() * 15),
    connect: connect.result

  });
  });
//____________________________________________________________________________________________________________________________


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

