const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: [true, 'Question text is required'],
  },
  options: {
    type: [String],
    required: [true, 'Question must have options'],
    validate: {
      validator: function (arr) {
        return arr.length >= 2;
      },
      message: 'Question must have at least two options',
    },
  },
  answer: {
    type: String,
    required: [true, 'Question must have a correct answer'],
  },
  weight: {
    type: Number,
    default: 1,
  },
});

const QuizSchema = new Schema({
  instructor: {
    type: String,
    required: [true, 'Quiz must have an instructor'],
  },
  course: {
    type: String,
    required: [true, 'Quiz must be associated with a course'],
  },
  questions: {
    type: [QuestionSchema],
    required: [true, 'Quiz must have questions'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    // suppose it valid for 1 Week
    default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
});

const QuizModel = mongoose.model('Quiz', QuizSchema);
module.exports = QuizModel;
