const app =  require("./app")
require("dotenv").config();
const port = process.env.PORT || 3000;
const ConnectDB = require("./config/connectionDB");

app.listen(port,async ()=>{
    console.log(`my server running http://localhost:${port}`)
    await ConnectDB();
})

