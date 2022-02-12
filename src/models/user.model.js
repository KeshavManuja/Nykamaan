const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type: String, required : false},
    mobile: {type: Number, required : false},
    email: {type : String, required : false},
}, {
    versionKey : false,
    timestamps : true
});

module.exports = mongoose.model("user", userSchema);