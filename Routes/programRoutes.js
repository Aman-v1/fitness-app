const express = require('express');
const { createProgram, deleteProgram, updateProgram } = require('../Controllers/programCtrl');

const router = express.Router();

router.post('/', createProgram);
router.put('/:id', updateProgram);
router.delete('/:id', deleteProgram);

module.exports = router;
