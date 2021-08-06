//Without uppercase module
//run as localhost:4400
var http=require('http');
var name="priyanka";
http.createServer(function(request,response){
        converted=name.toUpperCase();
        response.writeHead(200,{'Content-Type':'Text/HTML'});
        response.write('Converting priyanka to uppercase : '+converted);
        return response.end();
}).listen(4400);

//With uppercase module
//run as localhost:3000
var uppercase=require('upper-case');
var http=require('http');
http.createServer(function(request,response){
        converted=name.toUpperCase();
        response.writeHead(200,{'Content-Type':'Text/HTML'});
        response.write('Converting sonam to uppercase : '+uppercase.upperCase("sonam"));
        return response.end();
}).listen(3000);
