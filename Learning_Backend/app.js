import express from "express";
import mongoose, { connect } from "mongoose";
import userRouter from "./routes/user.js" 
import { config } from "dotenv";

export const app=express();

config({
    path:"./data/config.env"
})

// using middleware
app.use(express.json());
app.use("/users", userRouter)


app.get("/",(req,res)=>{
    res.send("Nice working");
})





