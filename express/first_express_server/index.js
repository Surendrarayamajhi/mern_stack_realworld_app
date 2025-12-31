const express = require("express");

const app = express();

app.use(express.json())   //express.json is builtin middleware

app.get("/", (req,res)=>{
    res.send("Welcome to My Home Page!");
});

app.get("/example",(req, res, next) =>{
    res.send("This is get method");
});

// app.post("/example",(req, res, next) =>{
//     let data = req.body;
//     console.log(data);
//     res.send("This is an example response");
// });
app.post("/example",(req, res, next) =>{
    let {name, email} = req.body;
    console.log(name, email);  
     
    res.send("This is an example response");
});

app.put("/example",(req, res, next) =>{
    res.send("This is Put method");
});

app.patch("/example",(req, res, next) =>{
    res.send("This is Patch method");
});

app.delete("/example",(req, res, next) =>{
    res.send("This is Delete method");
});
app.listen(8000, ()=>{
    console.log("Server is running on port:8000");
});