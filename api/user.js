const mongoose = require('mongoose');
const { UserInputError } = require('apollo-server-express');
const bcrypt = require('bcrypt');
const { UserSchema, joiSchema } = require('./models/user.model.js');


const User = mongoose.model('users', UserSchema);


const emailRegex = /.+\@.+\..+/;

async function list() {
  const users = await User.find();
  return users;
}

async function alreadyRegistered(user) {
  const foundUser = await User.findOne({ email: user.email });
  if (foundUser) {
    return { value: true, Object: foundUser };
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
  if (result.value) {
    errors.push('User already registered try another email');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function hashpassword(user) {
  const newUser = user;
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
  const token = savedUser.generateAuthToken();
  savedUser.token = token;
  return savedUser;
}

async function logIn(_, { user }) {
  try {
    const { error, value: userObject } = joiSchema.validate(user);
    const result = await alreadyRegistered(userObject);
    if (result.value) {
      const validatePassword = await bcrypt.compare(userObject.password, result.Object.password);
      if (!validatePassword) {
        throw new UserInputError('Incorrect credentials', 'Wrong password or email');
      }
      const token = result.Object.generateAuthToken();
      result.Object.token = token;
      return result.Object;
    }
  } catch (err) {
    console.log (err.message);
  }
}

module.exports = { list, add, logIn };
