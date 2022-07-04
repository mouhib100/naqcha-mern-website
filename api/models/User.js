const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilePic:{type:String,default:" "},

},{timestamps:true}) //create a date or update a date this is why we used timestamps

module.exports = mongoose.model("User",UserSchema)