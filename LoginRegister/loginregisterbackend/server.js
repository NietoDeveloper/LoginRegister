const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require("./models/User");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const app = express();


const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'nsansnsandlksandksandksan';

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

// console.log(process.env.MONGO_URL)
mongoose.connect((process.env.MONGO_URL));
console.log("db connected")

app.post("/register", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  // console.log(req.body)
  if (password != confirmPassword) {
    console.log("Your password is not matched with confirm password");
    res.status(400).json({ message: "Your password is not matched with confirm password" });
  } else {
    try {
      const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
        confirmPassword: bcrypt.hashSync(confirmPassword, bcryptSalt),
      });
      res.json(user);
    } catch (error) {
      res.status(404).json(error);
    }
  }
})

app.post("/login",async(req,res)=>{
  const {email,password}=req.body;
  const user=await User.findOne({email});
  if(user){    
    const isMatch=bcrypt.compareSync(password,user.password);
    if(isMatch){
    jwt.sign({email:user.email,id:user._id},jwtSecret,{},
      (err,token)=>{
        if(err) throw err;
        res.cookie('token',token).json(user);
      });
    }
    else{
      res.status(404).json({message:"Invalid password"});
    }
  }
  else{
    res.status(404).json({message:"User not found"});
  }
})



app.listen(4000);