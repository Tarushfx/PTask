const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  state: {
    type: String,
    enum: ['notStarted', 'inProgress', 'completed'],
    default: 'notStarted',
  },
  description: String,
});
const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  created: {
    type: {
      date: Date,
      team: String,
      deadline: Date,
    },
  },
  state: {
    type: String,
    enum: ['notStarted', 'inProgress', 'completed'],
    default: 'notStarted',
  },
  description: String,
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [TaskSchema],
  projects: [ProjectSchema],
  likes: [String],
  // teams
});

module.exports = { UserSchema };
