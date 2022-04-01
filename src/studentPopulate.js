require('dotenv').config()

const connectDB = require('./components/elements/connectDB')
const Student = require('./models/studentModel')
const studentList = require('./students.json')


const start = async () => {
    try{
        await connectDB(process.env.REACT_APP_MONGO_URI)
        console.log('connected')
        await Student.deleteMany()
        await Student.create(studentList)
        console.log('Sucess!!!')
        process.exit(0)
    } catch(err){
        console.log(err)
        process.exit(1)
    }
}

start()