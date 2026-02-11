const mongo = require("mongoose")

const UserSchema = new mongo.Schema({
    name:{
        type : String,
        required : true
    },
      password:{
        type : String,
        required : true
    }
    
})

// const StudentInfo = mongo.model("StudentInfo",UserSchema)


module.exports = mongo.model("StudentInfo",UserSchema);
