const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;
