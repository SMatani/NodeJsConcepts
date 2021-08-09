var fs = require('fs')

fs.readFile('input.txt',function(error,data){
    if(error){
        console.log("Error occured");
    }
    else{
        console.log("Reading the file asyncronously"+data);
    }
})