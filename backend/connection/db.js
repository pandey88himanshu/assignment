const mongoose = require("mongoose");
require("dotenv").config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB).then(() => {
      console.log("DataBase Connected");
    });
  } catch (error) {
    console.log(error);
    console.log("Error Occurred");
  }
};
connect();
