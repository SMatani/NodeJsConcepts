// do:- npm install node-fetch
//to use fetch
//then import it to use
const fetch=require('node-fetch');

async function callMe(){
    console.log('Entered CallMe. ')
//await tells the program control to complete the tasks outside the function till fetch accomplishes its task
    const res=await fetch('https://api.github.com/users');
    console.log('After fetch execution');
    const Users=await res.json();
    console.log('After Users resolved')
    return Users;
}

console.log('Before calling callMe')
let a=callMe();
console.log('After calling callMe')
console.log(a);
//What to do with the promise?=>decide using "then"
a.then(data=>{console.log(data)})
console.log('End of js file');

//OUTPUT
// Before calling callMe
// Entered CallMe. 
// After calling callMe
// Promise { <pending> }
// End of js file
// After fetch execution
// After Users resolved
// --Users Data---