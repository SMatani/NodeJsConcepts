//projection object 
//filters the result

//MongoClient is used as alias
var mongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/StudentDatabase";
mongoClient.connect(url, function (err, database) {
    var dataObj = database.db("StudentDatabase");
    var deleteCriteria={branch:"Commerce"};

    //for more than one criterias:
         //var deleteCriteria={branch:"Commerce",name:"Priti"};
        //DeleteMany deletes all records
        //delete removes only one record
              //  dataObj.collection("student").deleteMany(deleteCriteria,

        dataObj.collection("student").delete(deleteCriteria,
            function(err,result){
                if(err) throw err;
                else
                console.log(result);
                database.close();
            });
    });

