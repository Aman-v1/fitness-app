const asyncHandler = require('express-async-handler');
const Program = require('../Models/programModel');

// @descr  Create new program
// @route  Post /api/program
exports.createProgram = asyncHandler(async (req, res) => {
  const { name, exercises } = req.body;
  const programExists = await Program.findOne({ name });
  if (programExists) {
    throw new Error('Exercise Already Exists');
  }
  // create the exercise
  const program = await Program.create({
    name,
    exercises,
  });
  await program.populate({ path: 'exercises' });
  res.json({
    status: 'success',
    message: 'Program created successfully',
    program,
  });
});

// @descr  Update program
// @route  Put /api/program/:id
exports.updateProgram = asyncHandler(async (req, res) => {
  const { name, exercises } = req.body;
  const program = await Program.findByIdAndUpdate(req.params.id, {
    name,
    exercises,
  });
  await program.populate({ path: 'exercises' });
  res.json({
    status: 'success',
    message: 'Program updated successfully',
    program,
  });
});

// @descr  Delete program
// @route  Delete /api/program/:id
exports.deleteProgram = asyncHandler(async (req, res) => {
  await Program.findByIdAndDelete(req.params.id);

  res.json({
    status: 'success',
    message: 'Program deleted successfully',
  });
});
