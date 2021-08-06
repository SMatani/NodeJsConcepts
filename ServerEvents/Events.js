var http=require('http');
var filesystem=require('fs');

var readfile=filesystem.createReadStream('FileServer.js');
readfile.on('open',function(){
    console.log('The file is open');
})

var writefile=filesystem.createWriteStream('WriteFile.js');
writefile.on('write',function(){
    console.log('File is writable');
});

