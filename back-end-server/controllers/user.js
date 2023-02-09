import { createError } from "../error.js";
import User from "../models/User.js";

 export const test = (req,res) => {
    console.log('test');
    res.send("data received  from server");
    
};
/** req - from user 
 * res- what goes to user
 *     res.json("data received  from server"); - output on screen
 *     as "text"
 *     res.send("data received from server"); - output on screen 
 *     as  text
 */
//use async when you have await / or any update ,delete kind of 
// command which will take time to execute.
export const update = async(req,res,next)=>{
        if (req.params.id === req.user.id){
            //user is comming from verify token
            //params from the "/:id"
            //now we will try to update the user 
        try{
              //search user by Id and update
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {new:true})//this returns the new name 
            res.status(200).json(updatedUser);
        }catch(err){
            next(err);
        }
        }
        else {
        return next(createError(403,"You can update only your account"));
        }
}
export const deleteUser =async(req,res,next)=>{
    if (req.params.id === req.user.id){

    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Has been Deleted");
    }catch(err){
        next(err);
    }

    }
    else {
    return next(createError(403,"You cant delete others account! "));
    }
}
export const getUser =async(req,res,next)=>{
try{
    const user = await User.findById(req.params.id);
    res.json(user);
}catch(err){next(err)};
}
export const subscribe =async(req,res,next)=>{
    
    try{
        await User.findByIdAndUpdate(req.params.id,{
            $inc: {subscribers:1},
            // we increase the no of subscriber by 1 for the youtube channel who link has been passed.
            
        },{new:true});
        // we increase the subscribed channel at two places at user , at the channel - subscriber , subscribedUsers
        await User.findByIdAndUpdate(req.user.id,{
            //user as we have verifytoken previously 
            $push: {subscribedUsers: req.params.id},
        //in the array we will be able to see the list of people 
        // user has subscribed , it is added their.
        });
        

        res.status(200).json("Subscription Successful");


    }
    
/*    try{
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json("User not found");

    const channel = await User.findById(req.params.id);
    if (!channel) return res.status(404).json("Channel not found");

    channel.subscribers += 1;
    await channel.save();

    user.subscribedUsers.push(channelId);
    await user.save();

    res.status(200).json("Successfully subscribed to the channel" );
   }*/
    catch(err){next(err)};
}
export const unsubscribe =async(req,res,next)=>{
    try{
await User.findByIdAndUpdate(req.user.id,{
    $pull: {subscribedUsers: req.params.id},
});

await User.findByIdAndUpdate(req.params.id,{
    $inc: {subscribers:-1},
},{new:true});

res.status(200).json("UnSubscribed");
    }catch(err){next(err)};
}
export const like=async(req,res,next)=>{
    try{

    }catch(err){next(err)};
}
export const dislike =async(req,res,next)=>{
    try{

    }catch(err){next(err)};
}
