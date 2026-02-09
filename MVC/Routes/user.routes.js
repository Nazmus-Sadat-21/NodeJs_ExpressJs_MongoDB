const {getallusers,CreateUser,UpdateUser,DeleteUser,getOneUser}= require("../Controllers/user.controllers")

const router = require("express").Router();

router.get("/all",getallusers);
router.get("/:id",getOneUser);
router.post("/create",CreateUser);
router.put("/:id",UpdateUser);
router.delete("/:id",DeleteUser);

module.exports = router;