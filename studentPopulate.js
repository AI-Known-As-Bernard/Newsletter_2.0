require('dotenv').config()

const connectDB = require('./src/components/elements/connectDB')
const Student = require('./src/models/studentModel')
const studentList = require('./src/students.json')
const Blog = require('./src/models/blogModel')
const blogList = require('./src/blogs.json')


const start = async () => {
    try{
        await connectDB(process.env.REACT_APP_MONGO_URI)
        console.log('connected')
        await Blog.deleteMany()
        await Blog.create(blogList)
        console.log('Sucess!!!')
        process.exit(0)
    } catch(err){
        console.log(err)
        process.exit(1)
    }
}

start()