const mongo = require("mongoose")

const UserSchema = new mongo.Schema({
    Name:{
        type : String,
        required : true
    },
      Password:{
        type : String,
        required : true
    }
    
})

// const StudentInfo = mongo.model("StudentInfo",UserSchema)


module.exports = mongo.model("StudentInfo",UserSchema);
