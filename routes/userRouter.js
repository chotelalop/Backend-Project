const express = require('express');
const userModel = require('../models/user-model');
const { log } = require('console');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateToken}= require("../utils/genrateToken");
const { generateKey } = require('crypto');

router.get("/", function (req, res){
    res.send("hey");
});

router.post("/register",  async function (req, res){
 try{   
    let {email, password, fullname} =req.body;

  bcrypt.genSalt(10,function (err, salt){
    bcrypt.hash(password,salt, async function (err, hash){
        if (err) return res.send(err.message);
        else {
            let user= await userModel.create ({
                email,
                password: hash,
                fullname,
            });
          let token = generateToken(user);
          //let token = jwt.sign({email, id:user._id}, "hey");
            res.cookie("token", token);
            res.send("user created succesfully");
        }
    });
  });
    
//res.send(user);
 }
  catch (err) {
    console.log(err.message);
    
 }
});


module.exports = router;