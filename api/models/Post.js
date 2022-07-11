const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({

    title:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    firstname:{type:String,required:false},
    lastname:{type:String,required:false},
    categories:{type:Array,required:false},
    photo:{type:String,required:false},


},{timestamps:true}) //create a date or update a date this is why we used timestamps

module.exports = mongoose.model("Post",PostSchema)