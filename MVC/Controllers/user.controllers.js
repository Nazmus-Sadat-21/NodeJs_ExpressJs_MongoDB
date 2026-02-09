const user =  require("../Models/user.models")

const getallusers = async(req,res)=>{
    try {
        const allUser = await user.find();
        if(allUser){
             res.status(200).send(allUser)
        }else{
            res.status(404).send({
            message : error
        })
        }
    } catch (error) {
        res.status(404).send({
            message : error
        })
    }
}




const getOneUser = async(req,res)=>{
    try {
        const id =  req.params.id;
        const User = await user.findById(id);
        if(User){
             res.status(200).send(User)
        }else{
            res.status(404).send({
            message : error
        })
        }
    } catch (error) {
        res.status(404).send({
            message : error
        })
    }
}

const CreateUser = async(req,res)=>{
    try {
        
        const Newusers = new user({
            Name : req.body.Name,
            StudentID : req.body.StudentID,
            Dept : req.body.Dept,
            CGPA : req.body.CGPA

        })
        const response = await Newusers.save();
        res.status(200).send(response)
    } catch (error) {
        res.status(404).send({
            message : error.message
        })
    }
}

const UpdateUser = async (req,res)=>{
    try {
        const id = req.params.id;
        const FindUser = await user.findByIdAndUpdate(id);
        FindUser.Name = req.body.Name;
        FindUser.StudentID = req.body.StudentID;
        FindUser.Dept = req.body.Dept;
        FindUser.CGPA= req.body.CGPA;
        const response = await FindUser.save();
        res.status(200).send(response)

    } catch (error) {
        res.status(404).send({
            message : error
        })
    }
}

const DeleteUser = async (req,res)=>{
     try {
        const id = req.params.id;
        const deletedUser = await user.deleteOne({_id:id});
        if(deletedUser){
             res.status(200).send({
                message : "Delete Successful"
             })
        }else{
            res.status(404).send({
            message : error
        })
        }
    } catch (error) {
        res.status(404).send({
            message : error
        })
    }
}

module.exports = {getallusers,CreateUser,UpdateUser,DeleteUser,getOneUser};
