const { type } = require('express/lib/response');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/backend-project");

const ownerSchema = mongoose.Schema({
    fullname: String,
    email : String,
    password: String,
    products: {
        type:Array,
        default: [],   
    },
    picture: String,
    gstin: String,
    contact: Number,
    picture: String,
});

module.exports = mongoose.model("owner", ownerSchema);
