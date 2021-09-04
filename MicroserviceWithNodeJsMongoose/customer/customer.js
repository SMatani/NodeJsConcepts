//importing express 
const express = require('express')

//for server actions
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

//import database
const database = require('../database/database')

//attributes for customer-->
//name,age,address,contact
//importing Customer model
const Customer = require('./customerModel')

//port configuration
app.listen("3030", () => {
    console.log("Server is up and running on 3030 port<----Customer Service---->")
})

//entry page 
app.get("/", (request, response) => {
    response.send("This is our entrypoint for customers microservice")
})

//post request, saving customer data
app.post("/customers", (req, res) => {
    console.log("POST CUSTOMERS")
    var customer = new Customer({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        contact: req.body.contact
    })
    customer.save().then((customer) => {
        console.log("Customer data Saved : ")
        console.log(customer)
        return res.status(200).send(customer)
    }).catch((e) => {
        console.log("Err", e)
        return res.status(401).send(e)
    })
})

//get customer data request
app.get("/customers", (req, res) => {
    Customer.find().then(customer => {
        console.log(customer)
        res.send(customer)
        // response.status(200).send(books)
    })
        .catch((e) => {
            console.log("Err", e)
            return res.status(401).send(e)
        })
})

app.get("/customers/:id", (req, res) => {

    Customer.findById(req.params.id).then(customer => {
        if (customer) {
            console.log(customer)
            res.json(customer)
        } else
            res.sendStatus(404)

    }).catch(err => {
        if (err) {
            console.log(err)
        }
    })
})

//deleting record
app.delete("/customers/:id", (req, res) => {
    Customer.findByIdAndDelete(req.params.id).then(() => {
        console.log("Customer record deleted successfully")
        res.send("Customer Removed Successfully")
    }
    ).catch(err => {
        if (err) throw err
    })
})

//updating record
// app.update("/customers/:id", (req, res) => {
//     Customer.findByIdAndUpdate(req.params.id, { name: 'Rocky' }).then(() => {
//         console.log("Customer record updated successfully")
//         res.send("Customer Data Updated Successfully")
//     }
//     ).catch(err => {
//         if (err) throw err
//     })
// })

//retrieve all the customers
app.get("/allcustomers",(req, res)=>{
    Customer.find({}).then((result)=> {
        console.log(result)
        res.json(result);
      }).catch(err=>{
          console.log(err)
      })
    });
 
