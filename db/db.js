const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB;

const initializeConnection = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to MongoDB.");
    })
    .catch((error) => {
      console.log("MongoDB connection error:", error);
    });
};
module.exports = { initializeConnection };
