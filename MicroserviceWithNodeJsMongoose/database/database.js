const mongoose =require('mongoose')

mongoose.connect("mongodb://localhost:27017/BooksDatabase",{
}).then(()=>console.log("Database Connected")).catch((e)=>console.log("Database Connection error",e))


// const mongoClient=require('mongodb').MongoClient

// let url="mongodb://localhost:27017/"

// let conn=mongoClient.connect(url,(err,database)=>{
//     if(err) throw err
//     else
//     console.log("Database Connected!")

//     let dbObject=database.db("BooksDatabase")
    // let data={
    //     name:"Philosopher",
    //     Price:"120"
    // }

    // dbObject.createCollection("bookSchema", function (err) {
    //     if (err) throw err;
    //     else
    //         console.log("Collection Books is created");
    //     console.log("----------------------------------------------------------------------------")

    // })

    // dbObject.collection("Books").drop(function (err, response) {
    //     if (err) throw err;
    //     else
    //         console.log("Books collection is deleted successfully");
    //     console.log("----------------------------------------------------------------------------")
    // });

    // dbObject.collection('Books').insertOne(data,(err,res)=>{
    //     if(err) throw err;
    //     console.log("Books Data Inserted Successfully");
    // })


//})
//module.exports=conn