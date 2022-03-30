const mongoose = require('mongoose')

const dbList = (uri) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true},function(err, db) {
      var dbo=db.db('Newsletter')
      dbo.collection('students')
    })
}

module.exports = dbList