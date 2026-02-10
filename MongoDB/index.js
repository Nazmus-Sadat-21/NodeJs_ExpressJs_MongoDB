
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 3000;



app.use(express.json())
app.use(express.urlencoded({extended:true}))


const ConnectDB = async ()=>{   //DB Connect
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/ProductsDB');
       console.log("DB in connected")
    } catch (error) {
        console.log("DB is not connected")
        console.log(error.message)
        process.exit(1);
    }
}

const ProductsSchema = new mongoose.Schema({  // create coloums 
    title:{
        type : String,
        required : true
    },
      price:{
        type : Number,
        required : true
    },
      description:{
        type : String,
        required : true
    },
      Date:{
        type : Date,
        default : Date.now
    }
    
})


const Product = mongoose.model('Products', ProductsSchema); 
const Product2 = mongoose.model('Products2', ProductsSchema)// ctreate collection


app.post("/products", async(req,res)=>{
    try {
        const NewProducts = new Product({
            title : req.body.title,
            price : req.body.price,
            description:req.body.description,
        })
        const response = await NewProducts.save(); // save to DB
        res.status(201).send(response)
    } catch (error) {
        res.status(404).send({
            message : error.message
        })
    }
})

app.listen(port,async()=>{
    console.log(`my server is http://localhost:${port}`)
    await ConnectDB();
})