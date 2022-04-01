// require('dotenv').config()
// require('express-async-errors')
const Students = require('./models/studentModel')
const express = require('express')
const mongoose = require('mongoose')


const start = async () => {
  try {
    // connectDB
    await mongoose.connect(process.env.REACT_APP_MONGO_URI,{useNewUrlParser: true,useCreateIndex: true,useFindAndModify: false,
useUnifiedTopology: true,}).then(() => {console.log('Connected Successfully')})
    const studentList = await Students.find()
    console.log(studentList)
  } catch (error) {
    console.log(error)
  }
}

start();
// 
// export default start