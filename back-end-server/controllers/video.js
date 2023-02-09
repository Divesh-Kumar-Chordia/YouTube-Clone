import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

export const addVideo = async (req,res,next)=>{
    const newVideo = new Video({userId:req.user.id,...req.body});
    try{
        const saveVideo = await newVideo.save();
        res.status(200).json(saveVideo);
    }catch(err){next(err);}

};
export const getVideo = async (req,res,next)=>{
    try{
        const video =await Video.findByIdAndDelete(req.params.id);
        res.status(200).json(video);
    }catch(err){next(err);}

}
export const updateVideo = async (req,res,next)=>{
    try{
        const video  = await Video.findById(req.params.id);
        if(!video)return next(createError(404,"Video Not Found!"));
        if(req.user.id === video.userId){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },
            {new:true}); 
            res.status(200).json(updatedVideo);
        }
        else{
            return next(createError(403,"You cannot update others videos"));
        }
        
    }catch(err){next(err);}

}
export const deleteVideo = async (req,res,next)=>{
    try{
        const video  = await Video.findById(req.params.id);
        if(!video)return next(createError(404,"Video Not Found!"));
        if(req.user.id === video.userId){
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("Video Deleted!");
        }
        else{
            return next(createError(403,"You cannot Delete others videos"));
        }
        
    }catch(err){next(err);}

}

export const addView = async (req,res,next)=>{
    try{
        await Video.findByIdAndUpdate(req.params.id,{
            $inc:{views:1},
        });
        res.status(200).json("One View Added");
    }catch(err){next(err);}

}

export const random = async (req,res,next)=>{
    try{
        const videos =await Video.aggregate([{
            $sample:{ size: 1}
        }]);
        res.status(200).json(videos);
    }catch(err){next(err);}

}

export const trend = async (req,res,next)=>{
    try{
        const video =await Video.find().sort(
            {views:-1}
        );
        /*
        views:-1 most viewed videos
        views:1 least viewed videos
        */
        res.status(200).json(video);
    }catch(err){next(err);}

}

export const sub = async (req,res,next)=>{
    try{
        //we find the userId , and subscribed Users. string

        const user =await User.findById(req.user.id);
        const subscribedChannels= user.subscribedUsers;
        // we have to  find all the channels 
        // we use Promise()

        const list =await  Promise.all(
            subscribedChannels.map(chanelId=>{
                return Video.find({userId: chanelId});
            })
        );
        res.status(200).json(list.flat().sort((a,b)=>b.createdAt -a.createdAt));
        
    }catch(err){next(err);}

}

export const search = async (req,res,next)=>{
    const query = req.query.q;
    try{
        const videos =await Video.find({
            title:{$regex:query , $options:"i"},
        }).limit(40);
        //regex is amazing thing to search
        // i - it is case insenstive. 
    // localhost:8800/api/videos/search?q=Music Video
        res.status(200).json(videos);
    }catch(err){next(err);}

}
export const getByTags = async (req,res,next)=>{
    const tags =req.query.tags.split(",");
    console.log(tags);
    try{
        //localhost:8800/api/videos/tags?tags=py
        const videos =await Video.find({
            tags:{$in:tags}
        }).limit(20);
        res.status(200).json(videos);
    }catch(err){next(err);}

}