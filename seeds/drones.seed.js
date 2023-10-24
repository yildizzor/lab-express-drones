// Iteration #1

const Drone = require("../models/Drone.model");

require("../db/index");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";

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
