// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a95a95b242e4625071cc08f')
  }, {
    $set: {
      name: 'Yevhen'
    },
    $inc: {
      age: 1
    },
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

});
