var log={
    info:function(info){
        console.log('info '+info);
    },

    warning:function(warning){
        console.log('warning '+warning);
    }
};

//how to load app.js for execution?
//loading it from log.js
//to do so first export it from here
module.exports=log;