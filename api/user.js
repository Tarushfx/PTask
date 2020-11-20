const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db');

async function list() {
  const db = getDb();
  const users = await db.collection('users').find({}).toArray();
  return users;
}

function validate(user) {
  const errors = [];
  if (user.name.length === 0) {
    errors.push('Name cannot be of zero characters');
  }
  if (user.age <= 13) {
    errors.push('You need to be above the age of 13 to continue');
  }
  if (errors.length > 0) {
    throw new UserInputError('Invalid input(s)', { errors });
  }
}

async function add(_, { user }) {
  const db = getDb();
  validate(user);
  // eslint-disable-next-line no-param-reassign
  user.created = new Date();
  // eslint-disable-next-line no-param-reassign
  user.id = await getNextSequence('users');
  const result = await db.collection('users').insertOne(user);
  const savedUser = await db.collection('users').findOne({ _id: result.insertedId });
  return savedUser;
}

module.exports = { list, add };
