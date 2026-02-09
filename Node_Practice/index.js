// const s = require("./index");
// console.log(s.name());
// console.log(s.Dept());
// console.log(s.Result());

//  const s = require("fs");

//  s.writeFile("Test.txt" , "My name is Nazmus Sadat,CSE" , (err)=>{
//    if(err){
//         console.log(err)
//    }else{
//      console.log("successful")
//    }
//  })

// s.readFile("Test.txt",(err,data)=>{
//    if(err){
//         console.log(err)
//    }else{
//      console.log(data.toString())
//    }
//  })

// console.log(__dirname)
// console.log(__filename)


// const s = require("os");
// console.log(s.hostname());

// const p = require('path');

// const extension = p.extname("index.html");
// console.log(extension);

// const joining = p.join(`${__dirname}/sadat`);
// console.log(joining);

// const { randomTitle, randomDesc, randomMovie } = require('random-movies');
// console.log(randomTitle());

const http = require('http');
const fs = require("fs");
const port =  3000;
const hostname = "127.0.0.1"

const myServer = http.createServer((req,res)=>{
   if(req.url=="/"){
    fs.readFile("index.html",(err,data)=>{
        res.writeHead(200, {"content-type" : "text/html"})
        res.write(data);
        res.end();
    })    
   }
   else if(req.url=="/about"){
    fs.readFile("about.html",(err,data)=>{
        res.writeHead(200, {"content-type" : "text/html"})
        res.write(data);
        res.end();
    })    
   }
   if(req.url=="/contact"){
    fs.readFile("contact.html",(err,data)=>{
        res.writeHead(200, {"content-type" : "text/html"})
        res.write(data);
        res.end();
    })    
   }
   
});

myServer.listen(port,hostname,()=>{
    console.log(`Server successfully running at http://${hostname}:${port}`);
})

