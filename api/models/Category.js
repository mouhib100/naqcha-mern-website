const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({

    name:{type:String,required:true},
   
},{timestamps:true}) //create a date or update a date this is why we used timestamps

module.exports = mongoose.model("Category",CategorySchema)