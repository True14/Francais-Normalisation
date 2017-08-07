'use strict';

const mongoose = require('mongoose');
const questionsSchema = mongoose.Schema({
  word: String,
  answer: String
});

questionsSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    word: this.word,
    answer: this.answer
  };
};

const userSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  accessToken: {type: String},
  name: {type: String},
  score: Number
  //questions
});

userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    googleId: this.googleId,
    name: this.name,
    score: this.score
  };
};



const User = mongoose.model('User', userSchema);
const Question = mongoose.model('Question', questionsSchema);
module.exports = {User, Question};
