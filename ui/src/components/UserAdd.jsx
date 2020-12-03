import React from "react";
import Joi from "joi-browser";
import "../css/style.css";
import Input from "./input.jsx";
import _ from "lodash";
import LikesModal from "../Modal/LikesModal.jsx";

export default class UserAdd extends React.Component {
  state = {
    signIn: {
      data: {
        email: "",
        password: "",
      },
      errors: {},
    },
    signUp: {
      data: {
        name: "",
        email: "",
        password: "",
        confirmpswd: "",
      },
      errors: {},
    },
  };
  constructor() {
    super();
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
    this.handleSubmitSignUpHelper = this.handleSubmitSignUpHelper.bind(this);
  }
  signInSchema = {
    email: Joi.string().required().label("E-mail"),
    password: Joi.string().required().min(6).label("Password"),
  };
  handleSignInChange = ({ currentTarget: input }) => {
    // console.log("hi");
    const signIn = { ...this.state.signIn };
    signIn.data[input.name] = input.value;

    // const errors = { ...this.state.signIn.errors };
    const error = this.validateSignInProperty(input);
    // console.log(error);
    if (error) signIn.errors[input.name] = error;
    else delete signIn.errors[input.name];

    this.setState({
      signIn,
    });
  };

  validateSignIn = () => {
    const errors = {};
    const settings = { abortEarly: false };
    const { error } = Joi.validate(
      this.state.signIn.data,
      this.signInSchema,
      settings
    );

    if (!error) {
      return null;
    }

    //to get all errors
    for (let item of error.signIn.data)
      errors[item.path[0]] = !errors[item.path[0]]
        ? item.message
        : `${errors[item.path[0]]} , ${item.message}`;

    // console.log(errors);
    return errors;
  };

  validateSignInProperty = ({ name, value }) => {
    const proprertyObject = { [name]: value };
    const propertySchema = { [name]: this.signInSchema[name] };
    // console.log(proprertyObject, propertySchema);
    const { error } = Joi.validate(proprertyObject, propertySchema);
    // console.log(error.details);
    // comparing the passwords
    // const confirm = this.confirmPasswords(name, value);
    if (error) return error.details[0].message;
    // if (confirm) return confirm;
    return null;
  };
  handleSubmitSignIn(e) {
    e.preventDefault();

    // const form = document.forms.signin;
    const signUp = { ...this.state.signIn };
    signUp.errors = this.validateSignIn();
    this.setState({ signUp });

    const user = { ...this.state.signIn.data };
    this.props.login(_.pick(user, ["email", "password"]));

    form.email.value = "";
    form.password.value = "";
  }

  signUpSchema = {
    name: Joi.string().required().min(5).label("Name"),
    email: Joi.string().required().label("E-mail"),
    password: Joi.string().required().min(6).label("Password"),
    confirmpswd: Joi.string().required().label("Confirm Password"),
  };

  handleSignUpChange = ({ currentTarget: input }) => {
    const signUp = { ...this.state.signUp };
    signUp.data[input.name] = input.value;

    // const errors = { ...this.state.errors };
    const error = this.validateSignUpProperty(input);
    // console.log(error);
    if (error) signUp.errors[input.name] = error;
    else delete signUp.errors[input.name];

    this.setState({ signUp });
  };
  validateSignUp = () => {
    const errors = {};
    const settings = { abortEarly: false };
    const { error } = Joi.validate(
      this.state.signUp.data,
      this.signUpSchema,
      settings
    );
    const confirm = this.confirmPasswords(
      "confirmPassword",
      this.state.signUp.data["confirmPassword"]
    );
    if (confirm && this.state.signUp.data["confirmPassword"])
      errors["confirmPassword"] = errors["confirmPassword"]
        ? `${errors["confirmPassword"]} , ${confirm}`
        : confirm;
    // console.log(confirm);
    if (!error) {
      return confirm;
    }

    //to get all errors
    for (let item of error.signUp.data)
      errors[item.path[0]] = !errors[item.path[0]]
        ? item.message
        : `${errors[item.path[0]]} , ${item.message}`;

    // console.log(errors);
    return errors;
  };
  confirmPasswords = (name, value) => {
    if (name === "confirmpswd")
      if (value !== this.state.signUp.data.password)
        return "The passwsords do not match!!!";
    return null;
  };

  validateSignUpProperty = ({ name, value }) => {
    const proprertyObject = { [name]: value };
    const propertySchema = { [name]: this.signUpSchema[name] };
    const { error } = Joi.validate(proprertyObject, propertySchema);
    // comparing the passwords
    const confirm = this.confirmPasswords(name, value);
    // console.log(confirm);
    if (error) return error.details[0].message;
    if (confirm) return confirm;
    return null;
  };

  async handleSubmitSignUpHelper(likes) {
    try {
      const signUp = { ...this.state.signUp };
      signUp.errors = this.validateSignUp();
      this.setState({ signUp });
      console.log(signUp);
      const user = _.pick(this.state.signUp.data, [
        "name",
        "email",
        "password",
      ]);
      // console.log(user);
      const status = await this.props.createUser(user, likes);
      if (status) {
        window.location = "/";
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err.details);
      document.getElementById("likesModalCancel").click();
      document.getElementById("errorContent").innerHTML = "User Already exists";
      document.getElementById("errorButton").click();
    }
  }

  handleSubmitSignUp(e) {
    e.preventDefault();
    document.getElementById("likes").click();
    const form = document.forms.signup;

    form.name.value = "";
    form.email.value = "";
    form.password.value = "";
    form.confirmpswd.value = "";
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="forms-container">
            <div className="signin-signup">
              <form
                onSubmit={this.handleSubmitSignIn}
                className="sign-in-form"
                name="signin"
              >
                <h2 className="title">Sign in</h2>
                <Input
                  placeholder="E-mail"
                  name="email"
                  type="email"
                  error={this.state.signIn.errors}
                  label="E-mail"
                  onChange={this.handleSignInChange}
                  form="SignIn"
                  iconType="email"
                />
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  error={this.state.signIn.errors}
                  label="Password"
                  onChange={this.handleSignInChange}
                  form="SignIn"
                  iconType="password"
                />
                <button className="btn solid">Sign In </button>
              </form>
              <form
                onSubmit={this.handleSubmitSignUp}
                className="sign-up-form"
                name="signup"
              >
                <h2 className="title">Sign up</h2>
                {/* <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Full Name" name="name" />
              </div> */}
                <Input
                  placeholder="Full Name"
                  name="name"
                  type="text"
                  error={this.state.signUp.errors}
                  label="Name"
                  onChange={this.handleSignUpChange}
                  form="SignUp"
                  iconType="title"
                />
                {/* <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" name="email" />
              </div> */}
                <Input
                  placeholder="E-mail"
                  name="email"
                  type="email"
                  error={this.state.signUp.errors}
                  label="E-mail"
                  onChange={this.handleSignUpChange}
                  form="SignUp"
                  iconType="email"
                />
                {/* <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" name="password" />
              </div> */}
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  error={this.state.signUp.errors}
                  label="Password"
                  onChange={this.handleSignUpChange}
                  form="SignUp"
                  iconType="password"
                />
                {/* <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpswd"
                />
              </div> */}
                <Input
                  placeholder="Confirm Password"
                  name="confirmpswd"
                  type="password"
                  error={this.state.signUp.errors}
                  label="Password"
                  onChange={this.handleSignUpChange}
                  form="SignUp"
                  iconType="password"
                />
                <button
                  id="likes"
                  style={{ display: "none" }}
                  data-target="#likesModal"
                  data-toggle="modal"
                ></button>
                <button className="btn">Sign Up </button>
              </form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>
                  Join us! to experience a personalised manager for all your
                  work.
                </p>
                <button className="btn transparent" id="sign-up-btn">
                  Sign up
                </button>
              </div>
              <img src="images/log.svg" className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>Hop on the wagon! We gon' create history.</p>
                <button className="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
              <img src="images/register.svg" className="image" alt="" />
            </div>
          </div>
        </div>
        <LikesModal call={this.handleSubmitSignUpHelper} />
      </React.Fragment>
    );
  }
}
