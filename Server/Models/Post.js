const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true        
    },
    likes:[{type:ObjectId,ref:"User"}], //array of object ids
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    postedBy:{
       type:ObjectId,   //object id of user who have created the post
       ref:"User"  //user model
    }
})


mongoose.model("Post",postSchema)