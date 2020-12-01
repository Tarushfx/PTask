const express = require('express');
const fs = require('fs');
require('dotenv').config();
const { connectToDb } = require('./db');
const { installHandler } = require('./api_handler');
const { createServer } = require('http');
const { execute, subscribe } = require('graphql');
const { SubscriptionServer } = require('subscriptions-transport-ws');


const app = express();

installHandler(app);

const port = process.env.API_SERVER_PORT || 3000;

const server = createServer(app);

// eslint-disable-next-line func-names
(async function () {
  try {
    await connectToDb();
    server.listen(port, () => {
      console.log(`API server started on port ${port}.`);
      new SubscriptionServer({
        execute,
        subscribe,
        schema: fs.readFileSync('schema.graphql', 'utf-8'),
      }, {
        server: server,
        path: "/graphql",
      })
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
}());
