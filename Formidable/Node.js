var http=require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/html'});
    response.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    response.write(
        '<input type="file" name="filetoupload"><br>'
    );
    response.write(
        '<input type="submit">'
    );
    response.write('</form>');
    response.end();
}).listen(4200);