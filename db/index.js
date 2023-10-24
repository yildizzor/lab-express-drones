// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

// prettier ignore
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const Drone = require("../models/Drone.model.js");

const drones = require("../seeds/drones.seed.js");

const saveDrones = async () => {
  try {
    const allDrones = await Drone.create(drones);
  } catch (error) {
    console.error(error);
  } finally {
    MONGO_URI.disconnect;
    // mongoose.connection.close(); //This is other way to close connection.
    console.log("Connection is closed.");
  }
};

saveDrones();
