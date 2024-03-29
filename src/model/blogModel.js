import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types
const blogSchema = new mongoose.Schema({
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
    likes:[{type:ObjectId, ref:"User"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId, ref:"User"}
    }],
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

module.exports = model("Blog", blogSchema)