// Create 
// append 
// open 
// writefile-->over-writes the specified file and content, if not present creates new
//file can be readable,writable,executable


var filesystem=require('fs');

//Adding data
filesystem.appendFile('CreateOutput.html','Data in the file id added. Great!!',function(Error,data){
    if(Error) throw Error;
    else
    console.log("The new data is saved successfully");
})

//writableornot
filesystem.open('FileFromServer.html','w',function(error){
    if(error) throw error;
    console.log("Successfully you can write this file");
})

//readableornot
filesystem.open('FileFromServer.html','r',function(error){
    if(error) throw error;
    console.log("Successfully you can read this file");
})

//notexecutable hence will then thow error
// filesystem.open('FileFromServer.html','x',function(error){
//     if(error) throw error;
//     console.log("Successfully you can write this file");
// })

//delete WriteFileCreated to see the result of below execution
filesystem.writeFile('WriteFileCreated.html','This is the content overwritten or added',function(error,data){
if(error) throw error;
console.log("New File created as it does not exist");
})

filesystem.writeFile('WriteFileAlreadyThere.html','This is the content overwritten or added',function(error,data){
    if(error) throw error;
    console.log("File content is over-written");
})

//CreateFile Todelete.html first to execute this block
// filesystem.unlink('Todelete.html',function(error){
//     if(error) throw error;
//     else console.log("Todelete File Deleted ");
// })

//CreateFile oldfile.html first to execute this block
// filesystem.rename('oldfile.html','newfile.html',function(error){
//     if(error) throw error;
//     else console.log("Filename is renamed.!")
// })

