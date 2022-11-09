const mongoose = require("mongoose") 
const AmazonSchema = mongoose.Schema({ 
    item:String,
    quantity:Number,
    cost:Number,
}) 
module.exports = mongoose.model("Amazon", 
AmazonSchema)