//projection object 
//filters the result

//MongoClient is used as alias
var mongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/StudentDatabase";
mongoClient.connect(url, function (err, database) {
    var dataObj = database.db("StudentDatabase");
        var sortCriteria={name:1};
        dataObj.collection("student").find().sort(sortCriteria).toArray(
            function(err,result){
                if(err) throw err;
                else
                console.log(result);
                database.close();
            });
    });

