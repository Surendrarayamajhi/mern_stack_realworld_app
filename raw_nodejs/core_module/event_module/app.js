const events = require("events");
const {EventEmitter} = events;
const eventEmitter = new EventEmitter();

//register on event
// eventEmitter.on("event-1", function(param1, value, name){
//     console.log("hello, here is evenEmmiter register or fire");
//     console.log(param1);
//     console.log(value);
//     console.log(name);
// })
// // emit or raise on event
// eventEmitter.emit("event-1","reply from emit by there", 200, "Suren");

//here is output
/*
hello, here is evenEmmiter register or fire
reply from emit by there
200
Suren
*/


eventEmitter.on("event-1", function(obj){
    console.log("hello, here is evenEmmiter register or fire");
    console.log(obj);
   
});
eventEmitter.emit("event-1",{mesg:"Suren detail", age: "28", name:"Suren"});

// passing parameter as obj by eventEmitter thourgh event-1
/*
hello, here is evenEmmiter register or fire
{ mesg: 'Suren detail', age: '28', name: 'Suren' }
 */