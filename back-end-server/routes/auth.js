import express from 'express';
import {  } from '../controllers/comment.js';
import { signin, signup } from '../controllers/auth.js';
const router =express.Router()
//POST request 
//CREATE A USER 
router.post("/signup",signup);
//SIGN IN
router.post("/signin",signin);
//GOOGLE AUTHENITCATION
router.post("/google",);
// 
export default router;