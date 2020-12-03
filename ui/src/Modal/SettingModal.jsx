import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import authservice from "../../services/authservice.js";
import jwt from "jsonwebtoken";
import graphQLFetch from "../graphQLFetch.js";
import ModalInput from "../components/modalInput.jsx";
import Joi from "joi-browser";
const SettingModal = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const schema = {
    name: Joi.string().min(5).required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
  };
  const handleChange = ({ currentTarget: input }) => {
    let formDataNew = { ...formData };
    let formErrorsNew = { ...formErrors };

    formDataNew[input.name] = input.value;

    let error = validateProperty(input);

    if (error) formErrorsNew[input.name] = error;
    else delete formErrorsNew[input.name];

    setFormErrors(formErrorsNew);
    setFormData(formDataNew);
  };
  const validateProperty = ({ name, value }) => {
    const proprertyObject = { [name]: value };
    const propertySchema = { [name]: schema[name] };
    const { error } = Joi.validate(proprertyObject, propertySchema);
    if (error) return error.details[0].message;
    return null;
  };

  async function usernameUpdate(user) {
    const query = `mutation update($user: UserUpdateNameInputs!) {
      UserUpdateName(user: $user)
    }`;

    const data = await graphQLFetch(query, { user: user });
    if (data.UserUpdateName === "Updated") {
      props.loadData();
      return true;
    }else {
      return false;
    }
  }

  async function update(user) {
    const query = `mutation update($user: UserUpdateInputs!){
      UserUpdate(user: $user)
    }`;

    const data = await graphQLFetch(query, { user: user });
    if (data.UserUpdate === "Updated") {
      props.loadData();
      return true;
    } else {
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let status;
    const form = document.forms.UpdateUser;
    const token = authservice.getToken();
    const id = jwt.decode(token)._id;
    const name = jwt.decode(token).name;
    try {
      if (form.password.value === "") {
        const user = {
          _id: id,
        };
        if (form.name.value === "") {
          user.name = name;
        } else {
          user.name = form.name.value;
        }
        status = await usernameUpdate(user);
        if(status){
          document.getElementById("successContent").innerHTML = "User Updated";
          document.getElementById("successButton").click();
        }else {
          document.getElementById("errorContent").innerHTML = "Something went wrong! Try again";
          document.getElementById("errorButton").click();
        }
      } else if (
        form.password.value === form.confirmPassword.value &&
        form.password.value.length >= 6
      ) {
        const user = {
          _id: id,
          password: form.password.value,
        };

        if (form.name.value !== "") {
          user.name = form.name.value;
        } else {
          user.name = name;
        }
        status = await update(user);

        authservice.clearToken();
        window.location = "/";
      } else {
        throw new Error("Something Went Wrong");
      }
    } catch (err) {
      console.log(err.message);
    }
    await (() => $("#settingModal").modal("hide"))();
    form.name.value = "";
    form.password.value = "";
    form.confirmPassword.value = "";
  }

  async function deleteUser() {
    const token = authservice.getToken();
    const id = jwt.decode(token)._id;
    const query = `mutation delete($user: getData!) {
      UserDelete(user: $user)
    }`;

    const user = {
      _id: id,
    };

    const data = await graphQLFetch(query, { user: user });
    if (data.UserDelete === "Deleted Successfully") {
      authservice.clearToken();
      window.location = "/";
    } else {
      props.loadData();
    }
  }

  return (
    <div id="settingModal" className="modal fade" role="dialog">
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        role="content"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Settings</h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={() => {
                setFormErrors({});
              }}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form name="UpdateUser" onSubmit={handleSubmit}>
              <ModalInput
                mode="input"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                key="name"
                iconType="title"
                onChange={handleChange}
                error={formErrors}
              />

              <ModalInput
                mode="input"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                key="password"
                iconType="password"
                onChange={handleChange}
                error={formErrors}
              />

              <ModalInput
                mode="input"
                placeholder="Confirm Password"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                key="confirmPassword"
                iconType="password"
                onChange={handleChange}
                error={formErrors}
              />
              <div className="form-group row">
                <button
                  type="button"
                  className="add-button ml-1"
                  data-dismiss="modal"
                  onClick={deleteUser}
                >
                  Delete Account
                </button>
                <button type="submit" className="add-button ml-1" id="update">
                  Update Account
                </button>
              </div>
            </form>
            <p style={{fontSize: "10px", textAlign: "right"}}>*Password update requires you to login again*</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
