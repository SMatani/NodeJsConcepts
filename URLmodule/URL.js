var weblink=require('url');

var address='http://localhost:3000/user.htm?name=sonam';

//returns an object containing url properties
var parsedUrl=weblink.parse(address,true);

console.log("Host : "+parsedUrl.host+"\nPathname : "+parsedUrl.pathname+
"\nSearch : "+parsedUrl.search);

var querydata=parsedUrl.query;
console.log("Retrieving the name from query: "+querydata.name);
