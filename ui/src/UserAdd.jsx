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
    const user = {
      name: form.name.value,
      age: form.age.value,
    };

    // eslint-disable-next-line react/destructuring-assignment
    this.props.createUser(user);
    form.name.value = ''; form.age.value = '';
  }

  render() {
    return (
      <form name="userAdd" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="age" placeholder="Age" />
        {/* eslint-disable-next-line react/button-has-type */}
        <button>Add</button>
      </form>
    );
  }
}

UserAdd.propTypes = {
  createUser: PropTypes.func.isRequired,
};
