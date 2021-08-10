//projection object 
//filters the result

//MongoClient is used as alias
var mongoClient = require('mongodb').MongoClient;

var url="mongodb://localhost:27017/StudentDatabase";

mongoClient.connect(url, function (err, database) {
    var dataObj = database.db("StudentDatabase");
    //to include {class:1}
    //to exclude {name:0}
    //to prevent object creation include _id:0 at start
    dataObj.collection("student").find({},{projection:{_id:0,name:1}})
.toArray(function(err,result){
    if(err)throw err;
    else
    console.log(result);
    database.close();
})

})
