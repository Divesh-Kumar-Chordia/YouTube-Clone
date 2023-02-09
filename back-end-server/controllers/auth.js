import mongoose from 'mongoose';
import { createError } from '../error.js';
import jwt from 'jsonwebtoken';
import cookieParser  from 'cookie-parser';
import bcrypt from  'bcryptjs';
import User from '../models/User.js';
export const signup =async (req,res,next)=>{
try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser =new User({ ...req.body, password:hash });
    //Save the new user
    await newUser.save();
    //Now send a notification
    res.status(200).send("User saved successfully");
    }
    catch(err){
    next(createError(404,"Not Found"));
    }
}
export const signIn =async (req,res,next)=>{
try{
    const user = await User.findOne({name:req.body.name});
    if(!user)next(createError(404,"User not found"));
    else{
    const isCorrect=await bcrypt.compareSync(req.body.password,user.password); // true
    //Now send a notification
    if(!isCorrect)next(createError(400,"Wrong password"));
    
    const token =jwt.sign({id:user._id},process.env.JWT);
    //We need to send user thing back , we send it as json web token
    //it is sent in cookie , we use  a secret key , stored in JWT ,.env file
    const {password , ...others} =user._doc;

    res.cookie("access_token",token,{
        httpOnly:true
    }).status(200).json(others);
    //No third party will be able to use the cookie -httpOnly=true
    
    }
   
}
    catch(err){
    next(createError(404,"Not Found"));
    }

}