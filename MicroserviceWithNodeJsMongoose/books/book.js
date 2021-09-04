var mongoose=require('mongoose')

var bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    numOfPages:{
        type:Number,
        required:false
    },
    publisher:{
        type:String,
        required:false
    }
})

var Book=mongoose.model("Book",bookSchema)

module.exports=Book