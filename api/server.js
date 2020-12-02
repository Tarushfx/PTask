const express = require('express');
const fs = require('fs');
require('dotenv').config();
const { connectToDb } = require('./db');
const { resolvers } = require('./api_handler');
const { createServer } = require('http');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { ApolloServer, PubSub } = require('apollo-server');

const GraphQLDate = require('./graphql_date');

const startServer = async () => {

  const pubsub = new PubSub();

  const url = "http://localhost:4000";

  const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
    formatError: (error) => {
      console.log(error);
      return error;
    },
    context: { pubsub },
  });

  await connectToDb();

  server.listen().then(({url: url}) => {
    console.log(`Server at ${url}`);
  });
}

startServer();

// const app = express();

// installHandler(app);



// const server = createServer(app);

// // eslint-disable-next-line func-names
// (async function () {
//   try {
//     await connectToDb();
//     server.listen(port, () => {
//       console.log(`API server started on port ${port}.`);
//       new SubscriptionServer({
//         execute,
//         subscribe,
//         schema: fs.readFileSync('schema.graphql', 'utf-8'),
//       }, {
//         server: server,
//         path: "/graphql",
//       })
//     });
//   } catch (err) {
//     console.log('ERROR:', err);
//   }
// }());


// function installHandler(app) {
//   const enableCors = (process.env.ENABLE_CORS || 'false') === 'true';
//   console.log('CORS setting:', enableCors);
//   server.applyMiddleware({ app, path: '/api', cors: enableCors });
//   server.installSubscriptionHandlers(app);
// }