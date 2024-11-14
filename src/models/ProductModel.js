const { Mongoose, default: mongoose, mongo } = require("mongoose"); 
const productSchema = new mongoose.Schema({
    title: {type:String},
    category : {type:String},
    brand : {type:String},
    price : {type:String},
    description : {type:String},
    image : {type:String},
    productCode : {type:String},
    remarks : {type:String},
   
},
{versionKey:false})

const productModel = mongoose.model("products",productSchema)
module.exports = productModel;