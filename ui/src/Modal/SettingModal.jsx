import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import authservice from "../../services/authservice.js";
import jwt from "jsonwebtoken";
import graphQLFetch from "../graphQLFetch.js";
import ModalInput from "../components/modalInput.jsx";

const SettingModal = (props) => {
  async function update(user) {
    const query = `mutation update($user: UserUpdateInputs!){
      UserUpdate(user: $user)
    }`;

    const data = await graphQLFetch(query, { user: user });
    if (data.UserUpdate === "Updated") {
      props.loadData();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.UpdateUser;
    const token = authservice.getToken();
    const id = jwt.decode(token)._id;
    try {
      if (
        form.password.value === form.confirmPassword.value &&
        form.password.value.length >= 6
      ) {
        const user = {
          _id: id,
          name: form.name.value,
          password: form.password.value,
        };
        await update(user);
      } else {
        throw new Error("Password dont match");
      }
    } catch (err) {
      console.log(err.message);
    }
    await (() => $("#settingModal").modal("hide"))();

    authservice.clearToken();
    window.location = "/";
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
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form name="UpdateUser" onSubmit={handleSubmit}>
              {/* <div className="form-group">
                <label htmlFor="name" className="col-md-2 col-form-label">
                  Name
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control form-control-sm mr-1"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
              </div> */}
              <ModalInput
                mode="input"
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                key="name"
              />
              {/* <div className="form-group">
                <label htmlFor="password" className="col-md-6 col-form-label">
                  New Password
                </label>
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control form-control-sm mr-1"
                    name="password"
                    placeholder="New Password"
                  />
                </div>
              </div> */}
              <ModalInput
                mode="input"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                key="password"
              />
              {/* <div className="form-group">
                <label
                  htmlFor="confirmPassword"
                  className="col-md-6 col-form-label"
                >
                  Confirm New Password
                </label>
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control form-control-sm mr-1"
                    name="confirmPassword"
                    placeholder="New Password"
                  />
                </div>
              </div> */}
              <ModalInput
                mode="input"
                placeholder="Confirm Password"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                key="confirmPassword"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
