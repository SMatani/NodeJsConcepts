var http=require('http');
var filesystem=require('fs');
var url=require('url');

http.createServer(function(request,response){
    var query=url.parse(request.url,true);
    var filename='.'+query.pathname;

    filesystem.readFile(filename,function(error,data){
        if(error){
            response.writeHead(404,{'Content-Type':'Text/Html'});
            return response.end("404 NOT FOUND");
        }
        else
        {
            response.writeHead(404,{'Content-Type':'Text/Html'});
            response.write(data);
            return response.end("File accessed successfully");

        }
    })
}).listen(3000);
    console.log("Executed on port no 3000");