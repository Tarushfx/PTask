const mongoose = require('mongoose');
const { UserInputError } = require('apollo-server-express');
const bcrypt = require('bcrypt');
const { UserSchema } = require('./models/user.model.js');


const User = mongoose.model('users', UserSchema);


const emailRegex = /.+\@.+\..+/;

async function list() {
  const users = await User.find();
  return users;
}

async function alreadyRegistered(user) {
  const foundUser = await User.findOne({ email: user.email });
  if (foundUser) {
    return true;
  }
  return false;
}

async function validate(user) {
  const errors = [];
  if (user.name.length === 0) {
    errors.push('Name cannot be of zero characters');
  }
  if (user.password.length < 6) {
    errors.push('Password must be of length greater than 6');
  }
  if (!emailRegex.test(user.email)) {
    errors.push('Invalid email address');
  }
  const result = await alreadyRegistered(user);
  if (result) {
    errors.push('User already registered try another email');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function hashpassword(user) {
  let newUser = user;
  console.log(newUser);
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  console.log(newUser);
  return newUser;
}


async function add(_, { user }) {
  await validate(user);
  const newUser = await hashpassword(user);
  const savedUser = await User.create(newUser);
  return savedUser;
}

module.exports = { list, add };
