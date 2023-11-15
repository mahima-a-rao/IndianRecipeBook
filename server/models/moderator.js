// PES CS 3rd Sem - WT Project - Copyright - Mahima A, Megha Bhat , Sravya Matta
// Date : 13 Nov 2023, Version 1.0
// PES University

const mongoose = require('mongoose');
const RecipeSchema = require('./recipes');

const ModeratorSchema = new mongoose.Schema({
  recipe: RecipeSchema,
});

module.exports = mongoose.model('Moderator', ModeratorSchema);
