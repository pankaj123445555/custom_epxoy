const express = require('express');
const app = express();
const User = require('../models/Users');
const Notifications = require('../models/notificationModel')

const registerUser = async (req,res)=>{
    console.log(req.body);
    const {name,email,phone,age,gender} = req.body;
    try{

    const user =  await  User.findOne({email});
    if(user)
    {
        return res.status(409).json({
            error : "user already exist",
            message : "The Provided email address is already register"
        })
    }
    const newUser = await User.create({
        name,
        email,
        phone,
        age,
        gender
    })
    const NotificationCart =  new Notifications({
        userId : newUser._id
    })
     NotificationCart.save();
    return res.status(200).json({
        message : "user registered successfully",
        user : newUser
    })
}
catch(error)
{
    console.log(error)
    return res.status(500).json({
        error : "internal server error",
        message : "An error occured while registering the user"
    })
}
}

const getAllUserDetails = async (req,res) => {
        
      try{

        const users = await User.find({});

        if(users.length===0)
        {
            return res.status(404).json({
                message : "No user found"
            })
        }
        return res.status(200).json({
            message : "list of all user",
            count : users.length,
            users : users
        })
      }
      catch(error)
      {
           return res.status(500).json({
            message : "An error occured while fetching all the user",
            error : error
           })
      }
}

module.exports = {registerUser,getAllUserDetails};