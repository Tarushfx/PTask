import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import jwt from 'jsonwebtoken';

import ModalInput from "../components/modalInput.jsx";
import authservice from "../../services/authservice";
import graphQLFetch from "../graphQLFetch";


const EditTaskModal = (props) => {

  async function handleSubmitEditTask(e){

    const query = `mutation taskUpdate($task: TaskUpdateInput!){
      TaskUpdate(task:$task)
    }`;

    e.preventDefault();
    const form = document.forms.editTask;
    const token = authservice.getToken();
    const id = jwt.decode(token)._id
    const task = {
      _id: id,
      task_id: props.task._id,
    }
    try{
      if(form.editTitle.value === "") {
        task.title= props.task.title;
      }else {
        task.title = form.editTitle.value;
      }
      if(form.editDeadline.value === ""){
        task.deadline = props.task.deadline;
      }else {
        task.deadline = new Date(form.editDeadline.value);
      }
      if(form.editDesc.value === ''){
        task.description = props.task.description;
      } else {
        task.description = form.editDesc.value;
      }
      task.state = props.task.state;
      const data = await graphQLFetch(query, {task: task})

      form.editTitle.value = '';
      form.editDeadline.value = '';
      form.editDesc.value = '';

      await (() => $("#editTaskModal").modal("hide"))();

      if(data.TaskUpdate == "Updated"){
        document.getElementById("successContent").innerHTML = "Task Edited !!! Get down to Work";
        document.getElementById("successButton").click();
      }
      else if(data.error){
        document.getElementById("errorContent").innerHTML = "Something went wrong! Try again";
        document.getElementById("errorButton").click();
      }

      await props.loadData();
    }catch(err){
      console.log(err.message)
    }
  }

  return (
    <div id="editTaskModal" className="modal fade" role="dialog">
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        role="content"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Edit Task</h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form name="editTask" onSubmit={handleSubmitEditTask}>
              <ModalInput
                mode="input"
                placeholder="Change Title"
                type="text"
                id="editTitle"
                name="editTitle"
                key="title"
                iconType="title"
              />
              <ModalInput
                mode="input"
                placeholder="Change Deadline"
                type="datetime-local"
                id="editDeadline"
                name="editDeadline"
                key="deadline"
                iconType="date"
              />
              <ModalInput
                mode="textarea"
                placeholder="Change Description"
                type="text"
                id="editDesc"
                name="editDesc"
                key="desc"
                iconType="password"
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
                  id="editTaskSubmit"
                >
                  Edit Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
