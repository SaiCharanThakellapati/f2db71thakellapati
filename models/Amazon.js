const mongoose = require("mongoose") 
const AmazonSchema = mongoose.Schema({ 
    item:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },

    cost:{
        type:Number,
        required:true,
        min:1,
        max:3000
    }
}) 
module.exports = mongoose.model("Amazon", 
AmazonSchema)