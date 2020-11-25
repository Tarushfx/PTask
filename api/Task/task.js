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

module.exports = { addTask };
