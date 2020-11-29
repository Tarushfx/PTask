const mongoose = require("mongoose");
const { UserSchema } = require("../models/user.model.js");

const User = mongoose.model("users", UserSchema);

async function addProject(_, { project }) {
  console.log(project);
  const data = await User.findOne({ _id: project._id });

  const addedProject = {
    title: project.title,
    created: new Date(),
    state: "InProgress",
    description: project.description,
  };

  data.projects.push(addedProject);
  console.log(data);
  const savedUser = await User.create(data);
  if (savedUser) {
    return addedProject;
  }
}

async function removeProject(_ ,{ project }) {
  const data = await User.findOne({ _id: project._id })
  const projectArray = data.projects.filter(x => x._id != project.project_id);
  data.projects = projectArray;
  const savedUser = await User.create(data);
  console.log(savedUser);
  if(savedUser){
    return "Removed";
  }
  else {
    return "Not Removed";
  }
}

// mutation projectRemove($project: ProjectRemove!){
//   ProjectRemove(project: $project)
// }

module.exports = { addProject, removeProject };