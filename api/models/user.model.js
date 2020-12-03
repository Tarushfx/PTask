const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { TeamSchema } = require('./teams.model.js')


const NotificationSchema = new mongoose.Schema({
  text :{
    type: String,
    required: true,
  },
  type: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  }
});

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    default: Date.now
  },
  state: {
    type: String,
    enum: ["InProgress", "Completed"],
    default: "InProgress",
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
    enum: ["InProgress", "Completed"],
    default: "InProgress",
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
  teams: [TeamSchema],
  notifications: [NotificationSchema],
});

const joiSchema = Joi.object({
  name: Joi.string().min(5).max(50),
  email: Joi.string().min(5).max(255).email().required(),
  password: Joi.string().min(5).max(255).required(),
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    "taskmanager"
  );
  return token;
};

module.exports = { UserSchema, joiSchema };
