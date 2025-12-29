const fs = require("fs");

// let readStream = fs.createReadStream("./data.txt");

// readStream.on("data", function (buffer) {
//     console.log(buffer.toString());
// });

//**another way to pass actual reAL data here below code block */
// let readStream = fs.createReadStream("./data.txt",{encoding: "utf-8"}); // here pass second parameter encoding:utf-8

// readStream.on("data", function (buffer) {
//     console.log(buffer);  //from here removed toString() method or function
// });

let readStream = fs.createReadStream("./data.txt");

let content = [];
readStream.on("data", function (buffer) {
    content.push(buffer);
});

readStream.on("end", function(){
    let actualData = Buffer.concat(content).toString();
    console.log(actualData);
});