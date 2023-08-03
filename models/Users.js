const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
  type : String,
  require: true
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"]
  },
  otp: {
    type: Number,
  },
  otpExpiry: {
    type: Date,
  },
  
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
