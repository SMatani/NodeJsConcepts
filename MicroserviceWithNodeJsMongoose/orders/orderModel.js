var mongoose=require('mongoose')

var orderSchema=new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    initialDate:{
        type:String,
        required:false
    },
    deliveryDate:{
        type:String,
        required:true
    }
})

var Order=mongoose.model("Order",orderSchema)

module.exports=Order