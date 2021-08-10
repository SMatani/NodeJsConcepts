var MongoClient=require('mongodb').MongoClient

var url=require('url');
var url = "mongodb://localhost:27017/StudentDatabase";

MongoClient.connect(url,function(err,db){
    if(err) throw err;

    var dbo=db.db("StudentDatabase");

    //create data object
    var dataObj={
        name:'Lavina',
        class:'XII',
        branch:'Commerce'
    }
    dbo.collection("student").insertOne(dataObj,function(err,response){
       if(err) throw err;
else
console.log("1 Document Added");
db.close();
    })


})