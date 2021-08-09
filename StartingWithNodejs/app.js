var fs=require('fs');

fs.readFile('textapp.txt',function(err,data){
    if(err){
        console.log(error);
    }

    setTimeout(()=>{
        console.log("Dispaly 1");
        console.log("Display 2");
    },3000);
});
console.log("SERVER WILL START IN 3 SECONDS");