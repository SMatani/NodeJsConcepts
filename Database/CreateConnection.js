var MongoClient=require('mongodb').MongoClient;

var Url="mongodb://localhost:27017/MongoDatabase";

MongoClient.connect(Url,function(error,db){
    if(error){
        throw error;
    }
    else{
        console.log('Connection is successful');
        db.close();
    }
})