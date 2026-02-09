const express = require("express");
const bodyParser = require('body-parser')
require("dotenv").config();
const cors = require("cors");
const app =  express();
const port = process.env.PORT || 3000;

const Users = require("./Routes/user.routes")
const DBconnect = require("./DBConnection/connection")


app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/users",Users)

app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/View/index.html`)
})


app.listen(port,async()=>{
    console.log(`my server is http://localhost:${port}`)
    await DBconnect()
   
})



