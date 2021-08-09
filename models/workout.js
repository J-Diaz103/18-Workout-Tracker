const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    required: "Enter type of workout",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter name of workout",
  },
  duration: {
    type: Number,
    required: "Enter the duration",
  },
  wight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
});

const Workout = mongoose.model("workout", transactionSchema);

module.exports = Workout;
