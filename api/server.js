const express = require('express');
require('dotenv').config();
const { connectToDb } = require('./db');
const { installHandler } = require('./api_handler');

const app = express();

installHandler(app);

const port = process.env.API_SERVER_PORT || 3000;

// eslint-disable-next-line func-names
(async function () {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server started on port ${port}.`);
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
}());
