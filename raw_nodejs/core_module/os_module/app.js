const os = require("os"); //os is operating sys.
// console.log(os); 
// console.log(typeof os); // output is type of object

let typeOfOs = os.type();
console.log(typeOfOs);  // output = Windows_NT

let arcOfOs = os.arch();

console.log(arcOfOs); // output = x64

let hostnameOfOs = os.hostname();
console.log(hostnameOfOs);  // o/p= Suren

let platformOfOS = os.platform();
console.log(platformOfOS); // O/P = win32

let freememOfOs = os.freemem();
console.log(freememOfOs);  // O/P = 2290319360
