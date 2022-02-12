const express = require("express");


const router = express.Router();
const Product = require("../models/product.model")

let userdata="";
let useremail="";
router.get("", (req, res) => {
  return res.render("index", {userdata,useremail});
});

router.get("/product", async(req, res) => {
  try{
    const product = await Product.find().lean().exec()  
    // console.log(product)
    return res.render("product",{product:product});
  }
  catch(err){
    return res.status(500).send({err:err.message})
  }
});
router.get("/unqProduct/:id", async(req, res) => {
  try{
    const uproduct = await Product.findById(req.params.id).lean().exec()
    // console.log(product)
    return res.render("unqProduct",{uproduct:uproduct});
  }
  catch(err){
    return res.status(500).send({err:err.message})
  }
}); 
                                                                    

module.exports = router