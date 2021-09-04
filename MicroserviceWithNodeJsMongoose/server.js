//creting root server
var express=require('express')

////Need to start app
var app=express()

//port fo rthe server
var port=process.env.PORT || 3000

//Routing
var routes=require('./api/routes')
//using the controller
routes(app)

app.listen(port,function(){
    console.log("Server is started on port: "+port);
})
