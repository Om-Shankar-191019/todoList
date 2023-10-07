const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("DB connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
