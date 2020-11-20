let aboutMessage = 'Task Manager API v1.0';

function setMessage(_, { message }) {
  // eslint-disable-next-line no-return-assign
  return aboutMessage = message;
}

function getMessage() {
  return aboutMessage;
}

module.exports = { getMessage, setMessage };
