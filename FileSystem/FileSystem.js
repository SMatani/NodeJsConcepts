// Operations:
// Read 
// Create 
// Rename 
// Update 
// Delete

var filesystem=require('fs');
var http=require('http');

http.createServer(function(request,response){
    //ReadFile
    filesystem.readFile('FileFromServer.html',function(error,data){
        response.writeHead(200,{'Content-Type':'Text/HTML'});
        response.write('Reading the file from server file'+data);
        return response.end();
    });
}).listen(3000);

