import mongoose from "mongoose";
import user from "./user.model.js";
import team from "./teams.model.js";

mongoose.connect("mongodb://localhost/taskmanager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const User = mongoose.model("users", user.UserSchema);
const findusers = async () => {
  const users = await User.find();
  const savedUser = await User.create({
    name: "Tarush",
    email: "www@hello1.com",
    password: "123456",
    tasks: [
      {
        title: "hello",
        description: "helloWorld",
        state: "inProgress",
      },
      {
        title: "hello2",
        created: new Date("2020-03-03"),
      },
    ],
    projects: [
      {
        title: "1234",
        created: {
          date: new Date("2020-03-03"),
          title: "wow",
          deadline: new Date("2020-03-04"),
        },
      },
    ],
  });
  console.log(savedUser);
};
findusers();

const Team = mongoose.model("teams", team.TeamSchema);
const findteams = async () => {
  const teams = await Team.find();
  const savedTeam = await Team.create({
    title: "3333",
    members: ["5fba9856ddd04a4d72f69387"],
    description: "yo4ww44yoyo",
  });
  console.log(savedTeam);
};
findteams();
const find = async () => {
  let te = await Team.findById("5fba9bb2819495506a16dee4");
  te = await User.findById(te.members[0]);
  console.log(te);
  // return te;
};
// find();
