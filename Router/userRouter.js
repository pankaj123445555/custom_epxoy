const express = require('express');

const User = require('../models/Users');
const registerUser = require('../Controller/userController');

const router = express.Router();

router.post('/register',registerUser);
module.exports = router;