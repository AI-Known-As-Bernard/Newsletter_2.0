const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: [true, 'First Name Required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name Required'],
  },
  year: {
    type: String,
    required: [true, 'Students Current Year Required'],
    enum: {
      values: ["1", "2"],
      message: '{VALUE} is not supported',
    },
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  gitHub: {
    type: String,
    required: [true, 'gitHub link required'],
  },
  message: {
    type: String,
    required: [true, 'message about the student is required'],
  },
  homeHighSchool: {
    type: String,
    // enum: {
    //   values: ['ikea', 'liddy', 'caressa', 'marcos'],
    //   message: '{VALUE} is not supported',
    // },
  },htmlSkill: {
    type: String,
    required: [true, 'Number representing skill level as PERCENTAGE'],
  },
  cssSkill: {
    type: String,
    required: [true, 'Number representing skill level as PERCENTAGE'],
  },
  jsSkill: {
    type: String,
    required: [true, 'Number representing skill level as PERCENTAGE'],
  },
  reactSkill: {
    type: String,
    required: [true, 'Number representing skill level as PERCENTAGE'],
  },
  nodeSkill: {
    type: String,
    required: [true, 'Number representing skill level as PERCENTAGE'],
  },
  portfolio:{
    type:String,
  },
  linkedIn:{
    type:String,
  },
  instagram:{
    type:String,
  },
  twitter:{
    type:String,
  }
})

module.exports = mongoose.model('student', studentSchema)