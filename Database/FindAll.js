//findOne()
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/StudentDatabase";

mongoClient.connect(url, function (err, database) {
    if (err) throw err;
    var dbo = database.db("StudentDatabase");
    dbo.collection("student").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        database.close();
    })
})
