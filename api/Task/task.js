const mongoose = require("mongoose");
const { UserSchema } = -require("../models/user.model.js");

const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

const User = mongoose.model("users", UserSchema);

async function addTask(_, { task }) {
  console.log(task);
  const data = await User.findOne({ _id: task._id });
  const addedTask = {
    title: task.title,
    created: new Date(),
    state: "InProgress",
    description: task.description,
  };
  console.log(task.deadline);
  console.log(dateRegex.test(task.deadline.toISOString()))
  if(dateRegex.test(task.deadline.toISOString())){
    addedTask.deadline = new Date(task.deadline.toISOString());
  }
  else{
    addedTask.deadline = new Date();
  }
  data.tasks.push(addedTask);
  console.log(data);
  const savedUser = await User.create(data);
  if (savedUser) {
    return addedTask;
  }
}

async function updateTask(_, { task }) {
  const data = await User.findOne({ _id: task._id });
  const taskArray = data.tasks
  const index = taskArray.findIndex(x => x._id == task.task_id );
  const foundTask = taskArray[index];
  foundTask.state = task.state;
  const savedUser = await User.create(data);
  console.log(savedUser);
  if(savedUser){
    return "Updated";
  }
  else {
    return "Not Updated"
  }
}

async function removeTask(_ ,{ task }) {
  const data = await User.findOne({ _id: task._id })
  const taskArray = data.tasks.filter(x => x._id != task.task_id);
  data.tasks = taskArray;
  const savedUser = await User.create(data);
  console.log(savedUser);
  if(savedUser){
    return "Removed";
  }
  else {
    return "Not Removed";
  }
}

module.exports = { addTask, updateTask, removeTask };
