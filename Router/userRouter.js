const express = require('express');

const User = require('../models/Users');
const {registerUser,getAllUserDetails} = require('../Controller/userController');
const {sentNotification,getNotification} = require('../Controller/notificationController')


const router = express.Router();

router.post('/register',registerUser);
router.get('/userlist',getAllUserDetails);
router.route('/notification').post(sentNotification).get(getNotification);

module.exports = router;