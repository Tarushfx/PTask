import React, {useState} from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import authservice from "../../services/authservice.js";
import jwt from "jsonwebtoken";
import graphQLFetch from "../graphQLFetch.js";
import ModalInput from "../components/modalInput.jsx";
import Joi from "joi-browser";

const AddProjectModal = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const schema = {
    title: Joi.string().min(5).required(),
    desc: Joi.string().min(5).required(),
  };
  const handleChange = ({currentTarget: input}) => {
    let formDataNew = {...formData};
    let formErrorsNew = {...formErrors};

    formDataNew[input.name] = input.value;

    let error = validateProperty(input);

    if (error) formErrorsNew[input.name] = error;
    else delete formErrorsNew[input.name];

    setFormErrors(formErrorsNew);
    setFormData(formDataNew);
  };
  const validateProperty = ({name, value}) => {
    const proprertyObject = {[name]: value};
    const propertySchema = {[name]: schema[name]};
    const {error} = Joi.validate(proprertyObject, propertySchema);
    if (error) return error.details[0].message;
    return null;
  };

  async function addProject(project) {
    const query = `mutation addP($project: ProjectInput!){
      addProject(project: $project){
        title created state
      }
    }`;

    console.log(project);
    const data = await graphQLFetch(query, {project: project});
    if (data.addProject) {
      return true;
    }
    if (data.error) {
      return false;
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

    const status = await addProject(project);
    form.title.value = "";
    form.desc.value = "";
    await (() => $("#projectModal").modal("hide"))();

    if (status) {
      document.getElementById("successContent").innerHTML = "Project Added !!! New Challenges Ahead";
      document.getElementById("successButton").click();
    } else {
      document.getElementById("errorContent").innerHTML = "Something went wrong! Try again";
      document.getElementById("errorButton").click();
    }

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
            <form name="projectAdd" onSubmit={handleSubmitProject}>
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
                mode="textarea"
                placeholder="Description"
                type="text"
                id="desc"
                name="desc"
                key="desc"
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
