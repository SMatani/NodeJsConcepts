var MongoClient = require ('mongodb').MongoClient;
var url = require('url');
//create a databse names mydb
var url = "mongodb://localhost:27017/StudentDatabase";
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbobject=db.db("mydb");
    //Creating a collection named employee
    dbobject.createCollection("student",function(err, response){
        if(err)throw err;
        console.log("Collection Created");
        db.close();
    });
}); // note : Colection in MongoDb is the same as table in mySql