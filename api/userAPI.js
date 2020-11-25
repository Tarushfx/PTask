const mongoose = require('mongoose');
const { UserSchema } = require('./models/user.model');
const bcrypt = require('bcrypt');
const User = mongoose.model('users', UserSchema);


async function userData(_, { user }) {
  const data = await User.findOne({ _id: user._id });
  return data;
}

async function userUpdate(_, { user }) {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await User.updateOne({_id: user._id}, {$set: {name: user.name , password: user.password }});
  return "Updated";
}

async function userDelete(_, { user }) {
  const deletedUser = await User.deleteOne({_id: user._id});
  if(deletedUser.deletedCount === 1){
    return "Deleted Successfully"
  }
  return "Unsuccessful";
}

module.exports = { userData, userUpdate, userDelete };





