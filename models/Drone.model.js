// Iteration #1

const mongoose = require("mongoose");

const model = mongoose.model;

const Schema = mongoose.Schema;

// const { Schema, model } = require("mongoose");

const droneSchema = new Schema(
  {
    name: { type: String, required: true },
    propellers: Number,
    maxSpeed: Number,
  },
  { timestamps: true }
);

const Drone = model("Drone", droneSchema);

module.exports = Drone;
