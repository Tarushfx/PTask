const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date');
const about = require('./about');
const user = require('./user');

const resolvers = {
  Query: {
    about: about.getMessage,
    userList: user.list,
    UserSignIn: user.logIn,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    UserAdd: user.add,
  },
  GraphQLDate,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || 'false') === 'true';
  console.log('CORS setting:', enableCors);
  server.applyMiddleware({ app, path: '/api', cors: enableCors });
}

module.exports = { installHandler };
