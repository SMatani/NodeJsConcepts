//findOne()
var mongoClient=require('mongodb').MongoClient;
var http=require('http');

var url="mongodb://localhost:27017/StudentDatabase";


mongoClient.connect(url,function(err,database){
    if(err) throw err;
    var dbo=database.db("StudentDatabase");
    dbo.collection("student").findOne({},function(err,result){
if(err)throw err;
else
console.log("Result: "+result.name);
database.close(); })
})
