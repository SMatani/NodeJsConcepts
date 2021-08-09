var fs = require('fs')

console.log("Implementing stats: ")
fs.stat('input.txt',function(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log("Is File? "+data.isFile());
        console.log("Is Directory? "+data.isDirectory());
    }
})