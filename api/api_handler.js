const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date');
const about = require('./about');
const user = require('./user');
const userAPI = require('./userAPI');
const taskAPI = require('./Task/task.js');
const projectAPI = require("./Project/project.js");
const notifAPI = require("./Notification/notification")

const resolvers = {
  Query: {
    about: about.getMessage,
    userData: userAPI.userData,
    UserSignIn: user.logIn,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    UserAdd: user.add,
    addTask: taskAPI.addTask,
    addProject: projectAPI.addProject,
    UserUpdate: userAPI.userUpdate,
    UserUpdateName: userAPI.userUpdateName,
    UserDelete: userAPI.userDelete,
    TaskStateUpdate: taskAPI.updateTaskState,
    TaskUpdate: taskAPI.updateTask,
    TaskRemove: taskAPI.removeTask,
    ProjectRemove: projectAPI.removeProject,
    NotifAdd: notifAPI.notifAdd,
    NotifUpdate: notifAPI.notifUpdate,
    NotifRemove: notifAPI.notifRemove,
    addLikes:userAPI.addLikes,
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
