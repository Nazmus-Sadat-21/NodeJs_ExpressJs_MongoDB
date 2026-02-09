const mongo = require("mongoose")

const ConnectDB = async ()=>{   //DB Connect
    try {
       await mongo.connect(process.env.DB_CONNECTION);
       console.log("DB in connected")
    } catch (error) {
        console.log("DB is not connected")
        console.log(error.message)
        process.exit(1);
    }
}

module.exports = ConnectDB;