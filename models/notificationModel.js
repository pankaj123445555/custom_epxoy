const mongoose = require('mongoose');
// const User = require('../models/Users');

const notificationModel = new mongoose.Schema({

    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    messages : [
        {
            title : {
                type : String
            },
            content: {
                type : String
            }
        }
    ]
},{timestamps: true})

const Notifications = mongoose.model('Notification', notificationModel);

module.exports = Notifications;