import express from "express";
import { User } from "../models/user.js";
import { getAllUsers } from "../controllers/user.js";
import { newUser } from "../controllers/user.js";
import { getuserDetails,updateUser,deleteUser } from "../controllers/user.js";

const router= express.Router();

router.get("/all",getAllUsers)

router.post("/new",newUser)

router.get("/userid/special",async (req,res)=>{
   res.json({ 
       success:true,
       message: "hello ji"
   })
})

router.route("/userid/:id").get(getuserDetails).put(updateUser).delete(deleteUser)

// router.get("/userid/:id",getuserDetails)

// router.put("/userid/:id",updateUser)

// router.delete("/userid/:id",deleteUser)

export default router;