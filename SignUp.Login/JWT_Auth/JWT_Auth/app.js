const express = require("express")
const jwt = require('jsonwebtoken');
const passport = require("passport")
const cors = require("cors");
require("dotenv").config();
const bcrypt =  require("bcrypt") //for data encryption
const saltRounds = 10;

const User = require("./models/user.models")

const app =  express();

// app.use(cors({
//     origin: 'http://localhost:3000', // your frontend origin
//     credentials: true
// }));
app.use(cors())


app.use(express.json())
app.use(express.urlencoded({extended:true}))


require("./config/passport")(passport)
app.use(passport.initialize())


app.get('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.status(200).send({
        success : true,
        user:{
            id: req.user._id,
            UserName: req.user.name ,
            
                  
        }
    })
    }
);


app.get("/",(req,res)=>{
    res.status(200).send("Sever is running")
})


app.get("/users",async (req,res)=>{
   try {
    const user = await User.find()
    res.status(200).send({
        success : true,
        message : "All Users",
        UserName : user
    })

   } catch (error) {
    res.status(500).send({
            message : error.message
      })
   }
})


app.post("/register",async(req,res)=>{
    try {   
    bcrypt.hash(req.body.password, saltRounds, async (err, hash)=> { //encrypting data 
    
        const NewUser = new User({
        name : req.body.name,
        password : hash
    })
    await NewUser.save();
    res.status(200).send("User create successfully")
    });
   
    } catch (error) {
        res.status(404).send({
            message : error.message
        })
    }
})


app.post("/login",async(req,res)=>{
  try {
    const user = await User.findOne({name:req.body.name})
    if(!user){
        return res.status(404).send(
            {
                success:false,
                message: "Username not found"
            }
            
        )
    }
    const pass = await bcrypt.compare(req.body.password,user.password)
    if(!pass){
        return res.status(401).send(
            {
                success:false,
                message: "Invalid Password"
            }
        )
    }
    // res.status(200).send({

    //     success : true,
    //     message : "Login Successful",
    //     UserName : user.Name
    // })

    const payload = {
        id : user._id,
        UserName : user.name
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn:"2d"
    })

      res.status(200).send({
        success : true,
        message : "Login Successful",
        UserName : user.name,
        token : `Bearer ${token}`
    })
    
  } 
  catch (error) {
     res.status(500).send({
            message : error.message
      })
  }





})


module.exports = app;





