require('dotenv').config();

const { MongoClient } = require('mongodb');
const uri = process.env.REACT_APP_MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const studentList = ()=>{
client.connect((err) => {
  const collection = client.db('Newsletter').collection('students');
  // perform actions on the collection object
  collection.find({}).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
    // return result;
  });
});
// }
// studentList()

// export default studentList;
