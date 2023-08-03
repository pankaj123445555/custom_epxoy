const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const Port = process.env.PORT||5000;
const uri = process.env.MONGO_URI
app.use(express.json());
const Notifications = require('./models/notificationModel');
mongoose.connect(uri)
.then(()=>{
    console.log('database(mongodb) is connected successfully)')
})
.catch((error)=>{
    console.log(`error while connecting to database ${error}`)
})

const userRouter = require('./Router/userRouter');

app.use('/api/user', userRouter);



app.listen(Port, ()=>{
    console.log(`server is listening on the port ${Port}`);
})