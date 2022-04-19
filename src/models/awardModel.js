const mongoose = require('mongoose')

const awardSchema = new mongoose.Schema({

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
  regional:{
      type:Array
  },
  state:{
      type:Array
  },
  national:{
      type:Array
  }
})

module.exports = mongoose.model('student', studentSchema)