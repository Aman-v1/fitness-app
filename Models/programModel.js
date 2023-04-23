const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    exercises: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Program = mongoose.model('Program', ProgramSchema);

module.exports = Program;
