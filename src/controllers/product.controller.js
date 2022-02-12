const express = require("express");

const Product = require("../models/product.model")

const router = express.Router();

const Razorpay = require('razorpay');

router.post("/products", async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).send(product)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})

router.get("/products", async (req, res) => {
    try {
        const product = await Product.find().lean().exec()
        res.status(201).send(product)
        console.log(product)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})


router.get("/add2", async (req, res) => {
    try {
        res.render("add2")
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})


router.get("/unqProduct", async (req, res) => {
    try {

        res.render("unqProduct")
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})


router.get("/payment", async (req, res) => {
    try {

        res.render("payment")
    }
    catch (err) {
        res.status(500).send(err.message)
    }
});

router.get("/",(req,res)=>{
    res.render("index")
})



// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({

	// Replace with your key_id
	key_id: "rzp_test_ZZhgWf11KYQDCc",

	// Replace with your key_secret
	key_secret: "9JRWq2ZcmVdnHhwIDX8uwa51"
});


//Inside app.js
router.post('/createOrder', (req, res)=>{

	// STEP 1:
    // console.log(req.body)
	const {amount,currency,receipt, notes} = req.body;	
		
	// STEP 2:	
	razorpayInstance.orders.create({amount, currency, receipt, notes},
		(err, order)=>{
		
		//STEP 3 & 4:
		if(!err)
			res.json(order)
		else
			res.send(err);
		}
	)
});

router.post("/sucess", (req,res)=>{
    
    res.render("thanks");
    
})






module.exports = router