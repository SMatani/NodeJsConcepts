//findOne()
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/StudentDatabase";

mongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbo = database.db("StudentDatabase");
    dbo.collection("student").drop(function (err, drop) {
        if (err) throw err;
        if(drop)
        console.log("Record Deleted");
        database.close();
    })
})
