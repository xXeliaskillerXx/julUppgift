/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jul"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE julklappar ( julklapp VARCHAR(255), bild VARCHAR(255), länk VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
*/

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jul"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO julklappar (julklapp, bild, länk) VALUES?";
  var values = [
    ['Pengar', 'https://www.foretagande.se/images/articles/661d42fdef7183d32020b709dcb07dbd.jpg', 'https://www.swedbank.se/'],
    ['kalingar', 'https://www.kallingar.se/646-large_default/skull-print-boxer-petrol.jpg', 'https://www.kallingar.se/kalsonger/110-skull-print-boxer-petrol.html'],
    ['trosor', 'https://www.junkyard.se/media/catalog/product/930x/8/6/860034.jpg', 'https://www.junkyard.se/trosor-thong-7'],
    ['strumpor', 'https://assets.partyking.org/img/products/1300/uv-neon-strumpor-2.jpg','https://www.partykungen.se/uv-neon-strumpor.html'],
    ['bible', 'https://www1.cbn.com/sites/default/files/styles/original/public/closeup-bible-cross_si.jpg?itok=BjGKoz4S', 'https://www.ebay.com/itm/The-Holy-Bible/264562677281?hash=item3d992a1621:g:mnoAAOSwRolbhXlj'],
    ['knack', 'https://images-na.ssl-images-amazon.com/images/I/81yQ2N9vzYL._SY606_.jpg', 'https://www.webhallen.com/se/product/171171-Knack?ref=Prisjakt'],
    ['knack2', 'https://i.ytimg.com/vi/Q5DH6p2pPh8/maxresdefault.jpg', 'https://www.webhallen.com/se/product/269985-Knack-2'],
    ['Fortnite monopol', 'https://www.elgiganten.se/image/dv_web_D180001002187646/15948/monopol-fortnite-edition-braedspel.jpg?$prod_all4one$', 'https://www.webhallen.com/se/product/290675-Monopoly-Fortnite-Edition-engelsk']
               
               ];
  con.query(sql, [values], function (err, result){
    if (err) throw err;
    console.log(result.affectedRows);
  });
});


