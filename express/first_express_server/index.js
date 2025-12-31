const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

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
    console.log(req.query)
    res.send("UserId :" + userId + " Details..");
});



/////////////express Sub Route///////////////////////
const admin = express.Router();
const student = express.Router();
app.use("/admin", admin);
app.use("/student", student);


admin.get("/home", (req, res, next) => {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Admin Home page");
});

student.get("/home", (req, res, next) => {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Student Home Page")
})

app.get("/home", (req, res, next) => {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Website Home Page")
})

/////Cookies Parser[client side to server side]/////////////
// app.get("/testcook", (req, res) => {
//     const {email} = req.cookies;
//     console.log(email);
//     res.send("testing cookies");
// });

// set the cookie by server side  to client side
// app.get("/testcook", (req, res) => {
//     res.cookie("name","abc123");
//     res.cookie("age", "32");
//     // console.log(email);
//     res.send("testing cookies");
// })
/////////////Clear Cookie method////////////////
// app.get("/testcook", (req, res) => {
//     res.clearCookie("name");
//     // console.log(email);
//     res.send("testing cookies");
// })


/////////Request Object//////
app.get("/testcook", (req, res) => {
    console.log(req.ip);
    console.log(req.secure);
    console.log(req.protocol);
    console.log(req.hostname);
    res.send("testing cookies");
})
app.listen(8000, ()=>{
    console.log("Server is running on port:8000");
});