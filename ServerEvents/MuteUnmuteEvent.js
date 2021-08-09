const EventEmitter = require('events');
var event= require('events');

var muteMe=function muteTheUser(){
    console.log("You are muted. Unmute yourself to talk in the session.");
}

var unmuteMe=function unmuteTheUser(){
    console.log("You are unmuted.");
}

eventmute= new event.EventEmitter();

eventmute.on('mute',muteMe);
eventmute.on('unmute',unmuteMe);

eventmute.emit('mute');
eventmute.emit('unmute');