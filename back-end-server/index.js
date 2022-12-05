import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; /** this for storing and using MONGO password from .env file */
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config()
app.use(express.json());

const connect =()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("MongoDB Connected");
    })
    .catch(err=>console.log("Error connecting to MongoDB \n",err));
};

app.use("/api/users",userRoutes);

app.listen(8800,()=>{
    connect();
console.log("Connected to Server");
})
