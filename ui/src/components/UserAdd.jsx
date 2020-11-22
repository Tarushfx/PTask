import React from 'react';
import '../css/style.css';

export default class UserAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
  }

  handleSubmitSignUp(e) {
    e.preventDefault();
    const form = document.forms.signup;
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
        console.log("Passwords don't match");
        throw new Error('Passwords dont match');
      }
    } catch (err) {
      alert('Error:', e.message);
    }

    form.name.value = '';
    form.email.value = '';
    form.password.value = '';
    form.confirmpswd.value = '';
  }

  handleSubmitSignIn(e) {
    e.preventDefault();
    const form = document.forms.signin;
    const user = {
      email: form.email.value,
      password: form.password.value,
    };
    this.props.login(user);

    form.email.value = '';
    form.password.value = '';
  }

  render() {
    return (
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={this.handleSubmitSignIn} className="sign-in-form" name="signin">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Email" name="email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" name="password" />
              </div>
              <button className="btn solid">Sign In </button>
            </form>
            <form onSubmit={this.handleSubmitSignUp} className="sign-up-form" name="signup">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Full Name" name="name" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" name="password" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Confirm Password" name="confirmpswd" />
              </div>
              <button className="btn">Sign Up </button>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
