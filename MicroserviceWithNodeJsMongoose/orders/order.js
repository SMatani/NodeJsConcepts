//importing express 
const express = require('express')

const axios=require('axios')
//for server actions
const app = express();

const mongoose=require('mongoose')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

//import database
const database = require('../database/database')

//attributes for order-->
//customerId,bookId,initialDate,deliveryDate
//importing order model
const Order = require('./orderModel')

//port configuration
app.listen("4200", () => {
    console.log("Server is up and running on 4200 port<----Order Service---->")
})

//entry page 
app.get("/", (request, response) => {
    response.send("This is our entrypoint for orders microservice")
})

//post request, saving order data
app.post("/orders", (req, res) => {
    console.log("POST ORDERS")
    var order = new Order({
        customerId: mongoose.Types.ObjectId(req.body.customerId),
        bookId: mongoose.Types.ObjectId(req.body.bookId),
        initialDate: req.body.initialDate,
        deliveryDate: req.body.deliveryDate
    })
    order.save().then((order) => {
        console.log("Order data Saved : ")
        console.log(order)
        return res.status(200).send(order)
    }).catch((e) => {
        console.log("Err", e)
        return res.status(401).send(e)
    })
})

//get customer data request
app.get("/orders", (req, res) => {
    Order.find().then(order => {
        console.log(order)
        res.send(order)
        // response.status(200).send(books)
    })
        .catch((e) => {
            console.log("Err", e)
            return res.status(401).send(e)
        })
})

//get order by id
app.get("/findorders/:id", (req, res) => {

    Order.findById(req.params.id).then(order => {
        if (order) {
            console.log(order.customerId)
            axios.get("http://localhost:3030/customers/"+order.customerId).then((response)=>{
            var orderObject={
                name:response.data.name,
                title:''
            }
            orderObject.title=response.data.title
            res.send(orderObject)
        }).catch(err => {
            console.log(err)
            res.send(err)})
        } 
})
})

//deleting record
app.delete("/orders/:id", (req, res) => {
    Customer.findByIdAndDelete(req.params.id).then(() => {
        console.log("Order record deleted successfully")
        res.send("Order Removed Successfully")
    }
    ).catch(err => {
        if (err) throw err
    })
})

//retrieve all the orders
app.get("/allorders",(req, res)=>{
    Order.find({}).then((result)=> {
        console.log(result)
        res.json(result);
      }).catch(err=>{
          console.log(err)
      })
    });
 
