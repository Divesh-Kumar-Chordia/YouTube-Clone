// IF a user has to delete or update it must be verified
//we use the token which are created during signUP 
import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next)=>{
    const token =req.cookies.access_token;
    if(!token)return next(createError(401,"You are not authenticated"));
// just because token exist doesn't mean it is same 
// we need to verify the user is same .

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err)return next(createError(403,"You are not verified./Token is invalid!"));
        req.user =user;
        next()
    });
};