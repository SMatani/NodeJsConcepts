//Async keyword returns the value of a function to which it is attached as a Promise

//Example
//All the below three function work the same
function a(){
    return Promise.resolve('a');
}

async function b(){
    return Promise.resolve('b');
}

async function c(){
    return 'c';
}

console.log(a());
console.log(b());
console.log(c());

// Output : Promise { 'a' }
// Promise { <pending> }
// Promise { 'c' }

//await says freeze the program here and await the value promise function returning  call

const fs=require('fs');
const util=require('util');
const read=util.promisify(fs.readFile);

var run=async ()=>{
    //using promise
    read('data.txt')
    .then(data=>
      {
        console.log("Result from promise: "+data)
      });
}

//using await
var run2=async()=>{
    const data=await read('data.txt');
console.log("Result from Await : "+data)
}
run();
run2();

//Output: Result from promise: Hi , Good Luck Studying Async Await and Promise.
//Result from Await : Hi , Good Luck Studying Async Await and Promise.

