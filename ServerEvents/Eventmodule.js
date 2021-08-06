const EventEmitter = require('events');
var events=require('events');
var eventEmitter=new events.EventEmitter();
var listener1=function listen1(){
    console.log("Listener 1 executed...");
}
var listener2=function listen2(){
    console.log("Listener 2 executed...");
}
eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" Listeners");
eventEmitter.emit("connection");

eventEmitter.removeListener('connection',listener1);
console.log("Listener 1 will not listen now");