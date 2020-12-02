const GraphQLDate = require('./graphql_date');
const about = require('./about');
const user = require('./user');
const userAPI = require('./userAPI');
const taskAPI = require('./Task/task.js');
const projectAPI = require("./Project/project.js");
const notifAPI = require("./Notification/notification");
const {subscribe} = require('graphql/subscription');
const { PubSub } = require('graphql-subscriptions');

const messages = [];

const subscriber = [];
const onMessageUpdate = (fn) => subscriber.push(fn);

const resolvers = {
  Query: {
    about: about.getMessage,
    userData: userAPI.userData,
    UserSignIn: user.logIn,
    messages: () => {
      return messages
    },
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
    postMessage: (parent, {message}, { pubsub }) => {
      const id = messages.length;
      messages.push({
        id,
        user: message.user,
        content: message.content,
      });
      pubsub.publish("12345", {messages: messages});
      subscriber.forEach((fn) => fn());
      return id;
    }
  },
  GraphQLDate,
  Subscription : {
    messages: {
      subscribe: (_, __, { pubsub }) => {
        const channel = Math.random().toString(36).slice(2,15);
        onMessageUpdate(() => pubsub.publish(channel, { messages }));
        setTimeout(() => pubsub.publish(channel, { messages }), 0);
        return pubsub.asyncIterator(channel)
      }

    }
  },
};

module.exports = { resolvers };
