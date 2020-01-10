const mysql = require('mysql');
const fs = require('fs');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "jul"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * from julklappar", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    module.exports.result = result;
  });

});

