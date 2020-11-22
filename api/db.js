require('dotenv').config();
const mongoose = require('mongoose');

async function connectToDb() {
  const url = process.env.DB_URL || 'mongodb://localhost/taskmanager';
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to MongoDB');
}

module.exports = { connectToDb };
