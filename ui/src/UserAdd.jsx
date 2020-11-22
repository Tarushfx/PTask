import React from 'react';
import PropTypes from 'prop-types';

export default class UserAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.userAdd;
    try {
      if (form.password.value === form.confirmpswd.value) {
        const user = {
          name: form.name.value,
          email: form.email.value,
          password: form.password.value,
        };
        // eslint-disable-next-line react/destructuring-assignment
        this.props.createUser(user);
      } else {
        throw new Error("The passwords don't match");
      }
      // eslint-disable-next-line no-shadow
    } catch (e) {
      alert('Error:', e.message);
    }
    form.name.value = '';
    form.email.value = '';
    form.password.value = '';
    form.confirmpswd.value = '';
  }

  render() {
    return (
      <form name="userAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="confirmpswd" placeholder="Confirm Password" />
        <br />
        {/* eslint-disable-next-line react/button-has-type */}
        <button>Add</button>
      </form>
    );
  }
}

UserAdd.propTypes = {
  createUser: PropTypes.func.isRequired,
};
