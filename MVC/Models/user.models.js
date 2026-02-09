const mongo = require("mongoose")

const UserSchema = new mongo.Schema({
    Name:{
        type : String,
        required : true
    },
      StudentID:{
        type : String,
        required : true
    },
      Dept:{
        type : String,
        required : true
    },
      CGPA:{
        type : String,
        required:true
    }
    
})

// const StudentInfo = mongo.model("StudentInfo",UserSchema)


module.exports = mongo.model("StudentInfo",UserSchema);