// fs.createWriteStream() method 
fs = require('fs'), 

// Use fs.createWriteStream() method 
// to write the file 
writerStream = fs.createWriteStream('output.txt');

// Read and display the file data on console 
writerStream.write('WriteStream Implemented');

writerStream.on('finish',function(){
    console.log("Write Completed. ")
})

writerStream.on('error',function(){
    console.log(error);
})