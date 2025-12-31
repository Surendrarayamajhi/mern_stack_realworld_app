const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("Welcome to My Home Page!");
});

app.get("/example",(req, res, next) =>{
    res.send("This is get method");
});

app.post("/example",(req, res, next) =>{
    res.send("This is Post method");
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