
const express = require("express");
const User = require("../models/user.model");

const router = express.Router();


router.get("/otpverify", async (req, res) => {
try {
     res.render("loginotp");
} catch (err) {
    return res.status(500).send(err.message)
}
});

router.get("/authdone", async (req, res) => {
    try {
        let userdata="";
        let useremail=""
     res.render("index", {userdata,useremail });    
    } catch (err) {
        return res.status(500).send(err.message)
    }
    });

router.get("", (req, res) => {
    return res.render("account");
});


router.get("/login", (req, res) => {
    return res.render("login");
});
router.get("/checkuser",  (req, res) => {
   return res.render("signup")
});

module.exports = router;
