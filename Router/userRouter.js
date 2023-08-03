const express = require('express');

const User = require('../models/Users');
const registerUser = require('../Controller/userController');
const {sentNotification,getNotification} = require('../Controller/notificationController')


const router = express.Router();

router.post('/register',registerUser);
router.route('/notification').post(sentNotification).get(getNotification);

module.exports = router;