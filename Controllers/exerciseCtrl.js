const asyncHandler = require('express-async-handler');
const Exercise = require('../Models/exerciseModel');

// @descr  Create new exercise
// @route  Post /api/exercise
exports.createExercise = asyncHandler(async (req, res) => {
  const { name, duration } = req.body;
  //If Exercise Exists
  const exerciseExists = await Exercise.findOne({ name });
  if (exerciseExists) {
    throw new Error('Exercise Already Exists');
  }
  // create the exercise
  const exercise = await Exercise.create({
    name,
    duration,
  });
  res.json({
    status: 'success',
    message: 'Exercise created successfully',
    exercise,
  });
});

// @descr  Delete exercise
// @route  Delete /api/exercise/:id
exports.deleteExercise = asyncHandler(async (req, res) => {
  await Exercise.findByIdAndDelete(req.params.id);

  res.json({
    status: 'success',
    message: 'Exercise deleted successfully',
  });
});
