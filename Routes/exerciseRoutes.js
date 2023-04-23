const express = require('express');
const { createExercise, deleteExercise } = require('../Controllers/exerciseCtrl');

const router = express.Router();

router.post('/', createExercise);
router.delete('/:id', deleteExercise);

module.exports = router;
