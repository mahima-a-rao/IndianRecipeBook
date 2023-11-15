// PES CS 3rd Sem - WT Project - Copyright - Mahima A, Megha Bhat , Sravya Matta
// Date : 13 Nov 2023, Version 1.0
// PES University

const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'meal name required'],
    trim: true,
  },
  time: {
    type: Number,
    required: [true, 'cooking time required'],
    default: 0,
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  ingredients: {
    type: String,
    trim: true,
    default: '',
  },
  steps: {
    type: String,
    trim: true,
    default: '',
  },
  imgURL: {
    type: String,
    trim: true,
  },
  difficulty: {
    type: String,
    default: 'easy',
  },
  username: {
    type: String,
  },
});

module.exports = RecipeSchema;
