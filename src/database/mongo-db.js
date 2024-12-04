// import modules
const mongoose = require("mongoose");

// get env variables
const MONGODB_URL = process.env.MONGODB_URL;

// connect to database
module.exports.connect = async () => {
  try {
    console.log(`Connecting to database [${MONGODB_URL}]...`);

    await mongoose.connect(MONGODB_URL);

    console.log(`Successfully connected to database`);
  } catch (error) {
    console.log(`Error connecting to database :: ${error.message}`);
  }
};
