var mongoose=require('mongoose')

var customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    contact:{
        type:String,
        required:true
    }
})

var Customer=mongoose.model("Customer",customerSchema)

module.exports=Customer