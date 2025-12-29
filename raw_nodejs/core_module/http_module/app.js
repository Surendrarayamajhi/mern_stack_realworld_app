// In this http module create server and listening server 
const http = require("http");


//Create Server
let server = http.createServer(function(req, res){
    if(req.url=== "/")
    {
        res.write("Welcome to Home Page");
    }else if(req.url=== "/about"){
        res.write("Welcome to About Us page");
    }else{
        res.write("Page Not Found!");
    }
    res.end();
});

server.on("connection", function(){
    console.log("New Connection..")
})
//Listening the server port
server.listen(3000, function(){
    console.log("seerver is listening on port:3000, Successfully!");
});