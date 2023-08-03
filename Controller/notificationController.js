const express = require('express');
const app = express();
const Notifications = require('../models/notificationModel');

const sentNotification = async (req,res)=>{

    const {title,content} = req.body;
    const userId = req.query.userId
     try{
       
        const notification = await Notifications.findOne({userId});
        if(!notification)
        {
            return res.status(400).json({
                message : "notification not found for particular user"
            })
        }
        notification.messages.push({title,content});
        const updatedNotification = await notification.save();
        return res.status(200).json({
            message : "notification sent successfully",
            notification : updatedNotification
        })
     }
     catch(error)
     {
         return res.status(500).json({
            error : 'internal server error',
            messages : "An error occured while sending the notification"
         })
     }
}

// function to get all the notifications belongs to particular user

const getNotification = async(req,res) => {
    
    
    
   try{
    const userId = req.query.userId;
    const notification =await  Notifications.findOne({userId});
    if(!notification)
    {
       return res.status(400).json({
        message : "No Notification found for this user"
       })
    }

    return res.status(200).json({
        notification : notification
    })

   }
   catch(error)
   {
       return res.status(500).json({
         error : error,
         message : "An error occured while fetching the notification"
       })
   }
}

module.exports = {sentNotification,getNotification};