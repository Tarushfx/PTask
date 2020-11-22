const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

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

const joiSchema = Joi.object({
  name: Joi.string().min(5).max(50),
  email: Joi.string().min(5).max(255).email()
    .required(),
  password: Joi.string().min(5).max(255).required(),
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    'taskmanager',
  );
  return token;
};

module.exports = { UserSchema, joiSchema };
