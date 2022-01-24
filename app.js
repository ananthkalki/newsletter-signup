const express = require("express");
const body = require("body-parser");
const request = require("request");
const bodyParser = require("body-parser");
const e = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})

app.post("/",(req,res)=>{
    var fname=req.body.fname;
    var lname=req.body.lname;
    var email=req.body.email;

    console.log(fname,lname,email)
})

app.listen(3000,()=>{
    console.log("workin");
})

14ff65e1b349ba01d7aff1611bdad26c-us5

2b86f6e8e6