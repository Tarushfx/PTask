const mongoose = require("mongoose");
const { UserSchema } = -require("../models/user.model.js");

const User = mongoose.model("users", UserSchema);

async function addTask(_, { task }) {
  console.log(task);
  const data = await User.findOne({ _id: task._id });
  const addedTask = {
    title: task.title,
    created: new Date(),
    state: "notStarted",
    description: task.description,
  };
  data.tasks.push(addedTask);
  console.log(data);
  const savedUser = await User.create(data);
  if (savedUser) {
    return addedTask;
  }
}

module.exports = { addTask };
