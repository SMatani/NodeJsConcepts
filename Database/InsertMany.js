var MongoClient=require('mongodb').MongoClient

var url = "mongodb://localhost:27017/StudentDatabase";

MongoClient.connect(url,function(err,db){
    if(err) throw err;

    var dbo=db.db("StudentDatabase");

    //create data object
    var dataObj=[{
        name:'Lavina',
        class:'XII',
        branch:'Commerce'
    },
    {
        name:'Jay',
        class:'XII', 
        branch:'Science'
    },
    {
        name:'Priti',
        class:'XII',
        branch:'Arts'
    },
    {
        name:'Priti',
        class:'XII',
        branch:'Commerce'
    }]
    dbo.collection("student").insertMany(dataObj,function(err,response){
       if(err) throw err;
else
console.log("Multiple Documents Added");
console.log("Number of records executed: "+response.insertedCount);
db.close();
    })


})