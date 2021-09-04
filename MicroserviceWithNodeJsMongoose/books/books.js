//3 business logics where books need to be ordered
//using mongodb, node.js and express.js
//required modules t strengthen my application
//express, body-parser,mongodb, mongoose, nodemon--to keep application execution active even if we apply any changes
//execute application as--> nodemon books.js
//load express module
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//importing model
const Book=require('./book')

app.use(bodyParser.json())

//import database
const database=require('../database/database')

//Server
app.listen(3000, () => {
    console.log("Server is up and running fine")
})

app.get("/", (request, response) => {
    response.send("This is our entrypoint for books service")
})

//post request
app.post("/books",  (req, res) => {
    console.log("POST BOOKS")
    var book = new Book({ title: req.body.title, 
        author: req.body.author, 
        numOfPages: req.body.numOfPages,
        publisher:req.body.publisher })
    book.save().then((book) => {
        console.log("Book data Saved : ")
        console.log(book)
        return res.status(200).send(book)
    }).catch((e) => {
            console.log("Err", e)
            return res.status(401).send(e)
})
})

// app.get("/books",(req,res)=>{
//     Book.find().then((books)=>{
//     response.status(200).send(books)
//     })
//     .catch((e) => {
//         console.log("Err", e)
//         return res.status(401).send(e)
// })
//})

app.get("/books",(req,res)=>{
    Book.find().then(book=>{
        console.log(book)
        res.send(book)
   // response.status(200).send(books)
    })
    .catch((e) => {
        console.log("Err", e)
        return res.status(401).send(e)
})
})

// app.get("/books/:id/:name",(req,res)=>{
// response.send(req.params.id)
// })

app.get("/books/:id",(req,res)=>{
    //response.send(req.params.id)

    Book.findById(req.params.id).then(book=>{
        if(book){
            console.log(book)
            res.json(book)
        }else
        res.sendStatus(404)
    
    }).catch(err=>{
        if(err){
            console.log(err)
        }
    })
})

//deleting records
app.delete("/books/:id",(req,res)=>{
    Book.findByIdAndDelete(req.params.id).then(()=>{
        console.log("Record deleted successfully")
        res.send("Book Removed Successfully")
    }
    ).catch(err=>
        {
            if(err) throw err
        })
})




