const { type } = require('express/lib/response');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/backend-project");

const userSchema = mongoose.Schema({
    fullname: String,
    email : String,
    password: String,
    cart:{
        type: Array,
        default: [],
    },
   
    orders: {
        type: Array,
        deafault: [],
    },
    contact: Number,
    picture: String,
});
module.exports = mongoose.model("user",userSchema);
