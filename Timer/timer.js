//Node.js timer functions are global.
//The set Timer functions are:
//1. setImmediate() - Used to execute setImmediate
//2. setInterval() - Used to define time interval
//3. setTimeout() - Used to execute one-time callback after delay milliseconds
//Clear Timer functions
//1. clearImmediate(immediateObj) - Used to stop immediateObj as created by setImmediate()
//2. clearInterval(intervalObj) - Used to stop intervalObj as created by setInterval()
//3. clearTimeout(timeoutObj) - Prevents timeoutObj as created by setTimeout()

setImmediate(function(){
    console.log("setImmediate: hi there from setImmediate");
});

setInterval(function(){
    console.log("SetInterval: Hi there after 2 millisecond completed!..");
},2000);

setTimeout(function(){
    console.log("SetTimeout: Hi there from setTimeout after 6 millisecond completed!..");
},6000);

function func(){
   console.log("Display after every 1 millisecond");
}

let id1=setInterval(func,1000);

//In order to set clearInterval/clearTimout/clearImmediate, the set function i.e setInterval must be in a variable
clearInterval(id1);