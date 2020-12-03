import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import authservice from "../../services/authservice.js";
import jwt from "jsonwebtoken";
import graphQLFetch from "../graphQLFetch.js";
import ModalInput from "../components/modalInput.jsx";
import Joi from "joi-browser";
import Toast from "../components/Notification/Notifications.jsx";

const AddTaskModal = (props) => {
  // let date = new Date();
  // console.log(date.toLocaleDateString());

  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    desc: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const schema = {
    title: Joi.string().min(5).required(),
    deadline: Joi.date().min(new Date()),
    desc: Joi.string().min(5),
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

  async function addTask(task) {
    const query = `mutation addTask($task : TaskInput!){
      addTask(task: $task){
        title created description state
      }
    }`;

    console.log(task);
    const data = await graphQLFetch(query, { task: task });
    if (data.addTask) {
      return true;
    } else if (data.error) {
      return false;
    }
  }

  async function handleSubmitTask(e) {
    e.preventDefault();
    const form = document.forms.taskAdd;
    const token = authservice.getToken();
    const id = jwt.decode(token)._id;
    const date = form.deadline.value;
    const task = {
      _id: id,
      title: form.title.value,
      description: form.desc.value,
    };
    if (date === "") {
      task.deadline = new Date();
    } else {
      task.deadline = new Date(date);
    }
    const status = await addTask(task);
    Toast.pushNotifications({
      type: 2,
      text: form.title.value,
      status: 1,
    });
    form.title.value = "";
    form.desc.value = "";
    form.deadline.value = "";
    await (() => $("#taskModal").modal("hide"))();

    if (status) {
      document.getElementById("successContent").innerHTML =
        "Task Added !!! Get down to Work";
      document.getElementById("successButton").click();
    } else {
      document.getElementById("errorContent").innerHTML =
        "Something went wrong! Try again";
      document.getElementById("errorButton").click();
    }

    await props.loadData();
  }

  return (
    <div id="taskModal" className="modal fade" role="dialog">
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        role="content"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Add a Task</h3>
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
            <form name="taskAdd" onSubmit={handleSubmitTask}>
              <ModalInput
                mode="input"
                placeholder="Title"
                type="text"
                id="title"
                name="title"
                key="title"
                iconType="title"
                onChange={handleChange}
                error={formErrors}
              />
              <ModalInput
                mode="input"
                placeholder="Deadline"
                type="datetime-local"
                id="deadline"
                name="deadline"
                key="deadline"
                iconType="date"
                onChange={handleChange}
                error={formErrors}
              />
              <ModalInput
                mode="textarea"
                placeholder="Description"
                type="text"
                id="desc"
                name="desc"
                key="desc"
                iconType="password"
                onChange={handleChange}
                error={formErrors}
              />

              <div className="form-group row">
                <button
                  type="button"
                  className="add-button ml-2"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="add-button ml-2"
                  id="taskSubmit"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
