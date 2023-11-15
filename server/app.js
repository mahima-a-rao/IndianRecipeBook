// PES CS 3rd Sem - WT Project - Copyright - Mahima A, Megha Bhat , Sravya Matta
// Date : 13 Nov 2023, Version 1.0
// PES University

const express = require('express');
const app = express();
const cors = require('cors');
const users = require('./routes/users');
const moderator = require('./routes/moderator');
const mongoose = require('mongoose');
require('dotenv').config();

// middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// routes
app.use('/api/v1/users', users);
app.use('/api/v1/moderator', moderator);

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
