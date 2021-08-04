var http= require('http');

//Created server using http library
var server= http.createServer(function(request,response){

    //set the connect header
    response.writeHead(200,
        {"Content-Type":"text/plain"});
        //send string to the response
        response.end("Hello from LOCALHOST SERVER");
});
server.listen(4400);
console.log("Server is active on port number 4400");