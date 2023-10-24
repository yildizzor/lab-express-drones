const express = require("express");
const router = express.Router();

// require the Drone model here

const Drone = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((drones) => {
      res.render("drones/list", { drones });
    })

    .catch((error) => next(error));
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here

  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propeller, maxSpeed } = req.body;

  Drone.create({ name, propeller, maxSpeed })
    .then((drone) => {
      res.redirect("/drones");
    })

    .catch((error) => next(error));
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const { id } = req.params;

  Drone.findOne({ _id: id }) //findById didn't work. there is Bsontype error????
    .then((editDrone) => {
      res.render("drones/update-form", { editDrone });
    })
    .catch((error) => next(error));
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const { name, propellers, maxSpeed } = req.body;
  const { id } = req.params;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed }, { new: true })

    .then((Drone) => {
      res.redirect("/drones");
    })

    .catch((error) => next(error));
});


router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
