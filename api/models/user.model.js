import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [TaskSchema],
  projects: [ProjectSchema],
  likes: [String],
  //teams
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
  state: {
    type: String,
    enum: ["notStarted", "inProgress", "completed"],
    default: "notStarted",
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
    enum: ["notStarted", "inProgress", "completed"],
    default: "notStarted",
  },
  description: String,
});
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  state: {
    type: String,
    enum: ["notStarted", "inProgress", "completed"],
    default: "notStarted",
  },
  description: String,
});
export default UserSchema;
