var express = require('express');
var router = express.Router();

router.post('/trades', function(req, res, next) {
    // open the database
  let db = new sqlite3.Database('../stocks.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the stocks database.');
  });
  let sql = `CREATE TABLE IF NOT EXISTS stocks(id integer PRIMARY KEY, type TEXT NOT NULL, user INTEGER, stock_symbol TEXT NOT NULL, stock_quantity INTEGER, stock_price REAL, trade_timestamp TEXT, FOREIGN KEY(user) REFERENCES users(id))`;
  
  db.run(sql, [], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`created table "stocks"`);
  });

//   var Trade = require('../models/trade.js')


//   router.post('/trades', function (req, res, next) {

//     var trade = Trade.create({
  
//         type: req.body.type,
//         user_id: req.body.user_id,
//         symbol: req.body.symbol,
//         shares: req.body.shares,
//         price: req.body.price,
//     }).then((trade) => {
//       res.status(201).send(trade);
//     })
//   });



  sql = 'INSERT INTO stocks values (?, ?, ?, ?, ?,?)';
  db.run(sql, [req.body["type"], req.body["user_id"],req.body["symbol"], req.body["shares"], req.body["price"], req.body["timestamp"]], function(err,row) {
    if (err) {
      return console.log(err.message);
    }
    else 
    res.status(201).send(row)
  });
  db.close();
  res.end("trades added successfully.");
})

module.exports = router;


router.get('/trades/?type/?user_id', function (req, res) {
    // open the database
    let db = new sqlite3.Database('../stocks.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the stocks database.');
    });
    let sql = `SELECT * FROM trades Order By id ASC`;
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      else
      res.status().send(rows)
    });
    // close the database connection
    db.close();
    res.end("trades listed successfully.");
  });

  router.patch("/trades/:id",(req,res)=>{
    res.status(405);
  })

  router.put("/trades/:id",(req,res)=>{
    res.status(405);
  })

  router.delete("/trades/:id",(req,res)=>{
    res.status(405);
  })

router.get('/trades/?type/?user_id', function (req, res) {
  Product.findAll({}).then((data) => { res.status(200).send(data) })
 })
