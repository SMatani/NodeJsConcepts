var formidable=require('formidable');
var http=require('http');

http.createServer(function(request,response){
    var form= new formidable.IncomingForm();
    if(request.url=='/fileupload'){

    form.parse(request,function(error,fields,files){
        response.write('File uploaded successfully !');
        response.end();

    })
}
else{
    response.writeHead(200,{'Content-type':'text/html'});
    response.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data>'
    );
    response.write(
        '<input type="file" name="filetoupload"><br>'
    );
    response.write(
        '<input type="submit">'
    );
    response.write('</form>');
    response.end();
}
    
}).listen(8090);
