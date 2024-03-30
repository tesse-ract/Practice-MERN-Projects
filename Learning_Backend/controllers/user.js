import { User } from "../models/user.js";

export const getAllUsers = async (req,res)=>{

    const users=await User.find({})

    console.log(req.query);
    res.json({ 
        success:"true",
        users,
    })
}

export const newUser=async(req,res)=>{

    const{name,email,password}=req.body;

   const users=await User.create({
      name ,
      email ,
      password 
   });

   res.status(201).cookie("tempi","laila").json({
       success:true,
       message: "registered successfully",
   })
}

export const getuserDetails=async (req,res)=>{

    const {id}=req.params;
    const user=await User.findById(id);
 
    res.json({ 
        success:true,
        user,
    })
 }

 export const updateUser=async (req,res)=>{

    const {id}=req.params;
    const user=await User.findById(id);
 
    res.json({ 
        success:true,
        message:"updated",
    })
 }

 export const deleteUser=async (req,res)=>{

    const {id}=req.params;
    const user=await User.findById(id);

    res.json({ 
        success:true,
        message:"Deleted"
    })
 }