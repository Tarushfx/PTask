import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import authservice from "../../services/authservice.js";
import jwt from "jsonwebtoken";
import graphQLFetch from "../graphQLFetch.js";
import ModalInput from "../components/modalInput.jsx";

const AddProjectModal = (props) => {
  const formData = useState({
    title: "",
    description: "",
  });

  async function addProject(project) {
    const query = `mutation addP($project: ProjectInput!){
      addProject(project: $project){
        title created state
      }
    }`;

    console.log(project);
    const data = await graphQLFetch(query, { project: project });
    if (data) {
      console.log(data);
    }
  }

  async function handleSubmitProject(e) {
    e.preventDefault();
    const form = document.forms.projectAdd;
    const token = authservice.getToken();
    const id = jwt.decode(token)._id;
    const project = {
      _id: id,
      title: form.title.value,
      description: form.desc.value,
    };

    await addProject(project);
    form.title.value = "";
    form.desc.value = "";
    await (() => $("#projectModal").modal("hide"))();
    await props.loadData();
  }

  return (
    <div id="projectModal" className="modal fade" role="dialog">
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        role="content"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Add a Project</h3>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form name="projectAdd" onSubmit={handleSubmitProject}>
              <ModalInput
                mode="input"
                placeholder="Title"
                type="text"
                id="title"
                name="title"
                key="title"
              />
              <ModalInput
                mode="textarea"
                type="text"
                id="desc"
                name="desc"
                key="desc"
              />
              {/* <ModalInput
                placeholder="Description"
                type="textarea"
                id="desc"
                name="desc"
                key="desc"
              /> */}

              {/* <div className="form-group">

              </div> */}

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
                  id="projectSubmit"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;
