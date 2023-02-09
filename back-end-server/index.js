import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; /** this for storing and using MONGO password from .env file */
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config()
app.use(express.json());
app.use(cookieParser());
const connect =()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch(err=>console.log("Error connecting to MongoDB \n",err));
};
//allows passing json data from outside
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/videos",videoRoutes);
app.use("/api/comments",commentRoutes);
//customized error handling
app.use((err,req,res,next)=>{
    const status = err.status || "500";
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success:false,
        status:status,
        message:message
    })
})
app.listen(8800,()=>{
    connect();
console.log("Connected to Server");
})
