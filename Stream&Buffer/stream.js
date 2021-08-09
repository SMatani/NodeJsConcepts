const { info } = require('console');
var fs=require('fs')

var readStream=fs.createReadStream('input.txt');

readStream.setEncoding('utf-8');

readStream.on('data',function(error,info){
    if(error){
        console.log(error);
    }else
    //data=data+info;
    console.log("Data : "+data);
})