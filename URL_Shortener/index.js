const express=require("express");
const urlRoute=require("./routes/url.js");
const {connectToMongoDB} =require("./connect.js");
const URL=require("./models/url.js")

const app=express();
const PORT=8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(()=>{
    console.log("MongoDB connected");
});

app.use(express.json()); // iss line ko urlRoute wali line ke neeche likh ra tha toh ni chala, very small but ridiculous error

app.use("/url",urlRoute);


// when you use app.use("/url", urlRoute), any HTTP request that matches the /url path (and any sub-paths) will trigger the middleware or route handlers defined in urlRoute.



app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
})