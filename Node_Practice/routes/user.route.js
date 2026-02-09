const express = require("express");
const router = express.Router();

router.get("/name",(req,res)=>{
    res.send("<h1>I am Nazmus Sadat</h1>")
    res.end();
})
router.get("/about",(req,res)=>{
    res.send("<h1>I am Nazmus Sadat,CSE,23-53534-3</h1>")
    res.end();
})

module.exports = router;