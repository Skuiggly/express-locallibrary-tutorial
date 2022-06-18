const establishMongoConnection = () => {
  //Import the mongoose module
  const mongoose = require('mongoose');
  // Import dotenv
  require('dotenv').config()

  // Error handling
  if (!process.env) {
    console.error('ERROR: process.env not found');
    return false;
  }
  if (!process.env.MONGO_CONNECTION_STRING) {
    console.error('ERROR: MONGO_CONNECTION_STRING not found in process.env');
    return false;
  }
  if (!process.env.MONGO_USERNAME) {
    console.error('ERROR: MONGO_USERNAME not found in process.env');
    return false;
  }
  if (!process.env.MONGO_PASSWORD) {
    console.error('ERROR: MONGO_PASSWORD not found in proces.env');
    return false;
  }

  //Set up default mongoose connection
  const mongoDB = process.env.MONGO_CONNECTION_STRING
    .replace('<username>', process.env.MONGO_USERNAME)
    .replace('<password>', process.env.MONGO_PASSWORD);
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

  //Get the default connection
  const db = mongoose.connection;

  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  return db;
}
export default establishMongoConnection;