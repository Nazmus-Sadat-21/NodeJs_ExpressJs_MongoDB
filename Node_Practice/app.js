const express = require("express");
const app = express();
const userRouter = require("./routes/user.route")

app.use("/api/user" , userRouter)

app.get("/",(req,res)=>{
    
    const id = req.query.id;
    const name = req.query.name;
    res.send(`Student name is ${name} , id is ${id}`);
    // res.send("<h1>Home</h1>")
    // res.end();
})

app.use("/sadat",(req,res)=>{
    // res.status(200).json({
    //     Name : "Nazmus Sadat",
    //     Age : "23"
    // })
    res.statusCode = 200;
    res.sendFile(`${__dirname}/index.html`)

})

app.use((req,res)=>{ //ERROR message
    res.send("ERROR")
})


// app.post("/",(req,res)=>{
//     res.send("<h1>I am Nazmus Sadat,EEE</h1>")
//     res.end();
// })
// app.put("/",(req,res)=>{
//     res.send("<h1>I am Nazmus Sadat,EEE</h1>")
//     res.end();
// })
// app.delete("/",(req,res)=>{
//     res.send("<h1>I am Nazmus Sadat</h1>")
//     res.end();
// })



module.exports = app;

