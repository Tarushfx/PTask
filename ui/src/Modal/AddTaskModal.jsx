import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import authservice from "../../services/authservice.js";
import jwt from "jsonwebtoken";
import graphQLFetch from "../graphQLFetch.js";
import ModalInput from "../components/modalInput.jsx";

const AddTaskModal = (props) => {
  const formData = useState({
    title: "",
    description: "",
    deadline: "",
  });
  async function addTask(task) {
    const query = `mutation addTask($task : TaskInput!){
      addTask(task: $task){
        title created description state
      }
    }`;

    console.log(task);
    const data = await graphQLFetch(query, { task: task });
    if (data) {
      console.log(data);
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
    if(date === ''){
      task.deadline = new Date();
    }
    else{
      task.deadline = new Date(date);
    }
    await addTask(task);
    form.title.value = "";
    form.desc.value = "";
    console.log("not called");
    await (() => $("#taskModal").modal("hide"))();
    console.log("here");
    await props.loadData();
    console.log("render");
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
            <button type="button" className="close" data-dismiss="modal">
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
              />
              <ModalInput
                mode="input"
                placeholder="Deadline"
                type="datetime-local"
                id="deadline"
                name="deadline"
                key="deadline"
              />
              <ModalInput
                mode="textarea"
                type="text"
                id="desc"
                name="desc"
                key="desc"
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
