const mongoose = require('mongoose');
const { UserSchema } = require('./models/user.model');

const User = mongoose.model('users', UserSchema);

async function userData(_, { user }) {
  console.log(user);
  const data = await User.findOne({ _id: user._id });

  return data;
}

module.exports = { userData };
