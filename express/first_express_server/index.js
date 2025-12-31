const express = require("express");

const app = express();

// app.use(express.json())   //express.json is builtin middleware
app.use(express.text())

app.get("/", (req,res)=>{
    res.send("Welcome to My Home Page!");
});

app.get("/example",(req, res, next) =>{
    res.send("This is get method");
});

app.post("/example",(req, res, next) =>{
    let data = req.body;
    console.log(data);
    res.send("This is an example response");
});

//--this json middleware accepting api for post name and email
// app.post("/example",(req, res, next) =>{
//     let {name, email} = req.body;
//     console.log(name, email);  

//     res.send("This is an example response");
// });

app.put("/example",(req, res, next) =>{
    res.send("This is Put method");
});

app.patch("/example",(req, res, next) =>{
    res.send("This is Patch method");
});

app.delete("/example",(req, res, next) =>{
    res.send("This is Delete method");
});


// here we create some dynamic route for user by with user_id
// first one is passing static route for users
app.get("/users", (req, res) =>{
    res.send("this is users");
});

// second one is passing dynamic route with the help of params
app.get("/users/:userId", (req, res) =>{
    const {userId} = req.params;
    console.log(userId);
    res.send("UserId :" + userId + " Details..");
});

app.listen(8000, ()=>{
    console.log("Server is running on port:8000");
});