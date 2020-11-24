const mongoose = require("mongoose");
const { UserSchema } = require("./models/user.model");
const userFunctions = require("./user.js");
const User = mongoose.model("users", UserSchema);

async function userData(_, { user }) {
  console.log(user);
  const data = await User.findOne({ _id: user._id });

  return data;
}
//User Update

// async function userUpdate(_, { user }) {
//   console.log(user);
//   const updatedUser = userFunctions.hashpassword();
//   const savedUser = User.updateOne({_id: updatedUser._id}, {$set: {name: updatedUser.name , password: updatedUser.password }});
//
// }
//
module.exports = { userData };
