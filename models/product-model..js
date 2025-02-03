const { type } = require('express/lib/response');
const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    
    image: String,
    name: String,
    price: Number,
    discount:{
        type: Number,
        deafault: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
});
module.exports = mongoose.model("products",productSchema);
