const express = require("express");
const bodyParser = require('body-parser')
const app =  express();
const port = 3000;
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// const middleware = (req,res,next)=>{
//     console.log("I am middleware")
//     next();
// }

app.get("/",(req,res)=>{
    res.statusCode = 200;
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/circle",(req,res)=>{
    res.statusCode = 200;
    res.sendFile(`${__dirname}/circle.html`)
})

app.get("/triangle",(req,res)=>{
    res.statusCode = 200;
    res.sendFile(`${__dirname}/triangle.html`)
})

app.post("/triangle",(req,res)=>{
    const h = req.body.height;
    const b = req.body.base;
    const area = 0.5*h*b;
    res.send(`<h1>Area of Triangle is ${area}</h1>`);
})

app.post("/circle",(req,res)=>{
    const r = req.body.radius;
    const area = Math.PI*r*r;
    res.send(`<h1>Area of Circle is ${area}</h1>`);
})


app.listen(port,()=>{
    console.log(`My server http://localhost:${port}`)
    
})