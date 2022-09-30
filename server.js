// importing express
const express=require("express");

// importing passport 
const passport = require("passport");
// initialisation 
const app =express();
const cors = require('cors');
//importing dotenv
require("dotenv").config();
// convert json:middleware
app.use(express.json());
app.use(cors());
// importing database
const  dbConnect = require("./dbConnect");
//connection database
dbConnect();

//routes
app.get("/nn",(req,res)=>res.send("hello"));
app.use("/user",require("./routes/user"));
app.use("/course",require("./routes/Course"));
app.use("/reservation",require("./routes/reservation"));

app.use(passport.initialize());
app.listen(process.env.PORT ,(err)=> err 
? console.log(err)
: console.log("server is connected..."+process.env.PORT) );