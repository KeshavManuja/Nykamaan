const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    featured:{type:Boolean, required:true},
    newArrival:{type:Boolean, required:true},
    bestseller:{type:Boolean, required:true},
    offer:{type:Boolean, required:true},
    brandName: { type: String, required: true },
    name: { type: String, required: false },
    newprice: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    discount: { type: String, required: true },
    ratings: { type: Number, required: true },
    category:{type: String, required: true },
    images:[{type:String, required:true}]

  },
  {
    versionKey: false,
    timestamps: true,
  } 
);

module.exports = mongoose.model("product", productSchema); 

