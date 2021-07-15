//Node.js provides Events module where you can create, fire and listen for your own events.

//import the events module
const events = require("events");
//EventEmitter() object is used to assign event handlers to own events.
const eventEmitter = new events.EventEmitter();
//create an event handler
function eventHandler(){
    console.log("An event has been fired");
}
//Assign the event handler to an event "call"
//Assign the event any name i.e call, scream, shout, etc
eventEmitter.addListener("call",eventHandler);
//Fire the event
eventEmitter.emit("call");