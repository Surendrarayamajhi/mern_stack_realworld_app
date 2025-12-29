const fs = require("fs");
fs.writeFileSync("test.txt","hello this file content generate by app.js using fs.writeFileSyncy"); //by using this create txt file in same dir or folder
fs.appendFileSync("test.txt","this content updated by appendFileSync recently created"); // for update the content which previously created by writeFileSync