const fs = require('fs');
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');

const GraphQLDate = require('./graphql_date');
const about = require('./about');
const user = require('./user');
const userAPI = require('./userAPI');
const taskAPI = require('./Task/task.js');
const projectAPI = require("./Project/project.js");
const notifAPI = require("./Notification/notification");
const {subscribe} = require('graphql/subscription');
const { PubSub } = require('graphql-subscriptions');

const messages = []

const subscribers = [];
const onMessageUpdate = (fn) => subscribers.push(fn);

const pubsub = new PubSub();
function messageSubscribe() {

  subscribe: (parent, args, { pubsub }) => {
    const channel = Math.random().toString(36).slice(2,15);
    onMessageUpdate(() => pubsub.publish(channel, { messages }));
    setTimeout(() => pubsub.publish(channel, {messages }), 0);
    return pubsub.asyncIterator(channel);
  }
}

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
    postMessage: (parent, {user, content}) => {
      const id = messages.length;
      messages.push({
        id,
        user,
        content,
      });

      subscribers.forEach(fn => fn());

      return id;
    }
  },
  GraphQLDate,
  Subscription : {
    messages: messageSubscribe,
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
  context: { pubsub },
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || 'false') === 'true';
  console.log('CORS setting:', enableCors);
  server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler };
