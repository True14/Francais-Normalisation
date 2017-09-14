'use strict';

const mongoose = require('mongoose');
const questionsSchema = mongoose.Schema({
  word: String,
  answer: String,
  right: Number,
  wrong: Number
});

questionsSchema.methods.apiRepr = () => ({
  id: this._id,
  word: this.word,
  answer: this.answer,
  right: this.right,
  wrong: this.wrong
});

const userSchema = mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  accessToken: {
    type: String
  },
  name: {
    type: String
  },
  score: Number,
  questions: Array
});

userSchema.methods.apiRepr = () => ({
  id: this._id,
  googleId: this.googleId,
  name: this.name,
  score: this.score,
  questions: this.questions
});



const User = mongoose.model('User', userSchema);
const Question = mongoose.model('Question', questionsSchema);
module.exports = {
  User,
  Question
};
