const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    month:{
        type: 'string',
        required: [true, 'Month Required'],
    },
    year: {
        type:'string',
        required: [true, 'Year Required'],
    },
    title:{
        type:'string',
        required: [true, 'Title Required'],
    },
    content: {
        type:'string',
        required: [true, 'Content Required'],
    },
})

module.exports = mongoose.model('blog', blogSchema)