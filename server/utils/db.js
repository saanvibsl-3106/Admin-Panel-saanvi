const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDb = () => {
  return mongoose.connect(URI)
    .then(() => console.log("Database connected successfully"))
    .catch(err => {
      console.error("Database connection error: ", err);
      process.exit(1);
    });
};

module.exports = { connectDb };
