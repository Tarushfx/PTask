import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ModalInput from "../components/modalInput.jsx";

const LikesModal = (props) => {
  async function handleSubmitLikes(e) {
    e.preventDefault();
    const form = document.forms.likes;
    const str = form.interests.value;
    const likes = str.split(" ");
    for (let i = 1; i <= 6; i++) {
      let id = "value" + String(i);
      let checkbox = document.getElementById(id);
      if (checkbox.checked) {
        likes.push(checkbox.value);
      }
    }
    await props.call(likes);
  }

  return (
    <div id="likesModal" className="modal fade" role="dialog">
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        role="content"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Tell us about your Interests</h3>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form name="likes" onSubmit={handleSubmitLikes}>
              <ModalInput
                mode="input"
                placeholder="Your Interests (with spaces)"
                type="text"
                id="interests"
                name="interests"
                iconType="interests"
              />
              <div className="form-group row">
                <input type="checkbox" value="Motivation" id="value1" />
                <label className="ml-1 mr-3">Motivation</label>
                <input type="checkbox" value="Life" id="value2" />
                <label className="ml-1 mr-3">Life</label>
                <input type="checkbox" value="Positivity" id="value3" />
                <label className="ml-1 mr-3">Positivity</label>
              </div>
              <div className="form-group row">
                <input type="checkbox" value="Optimism" id="value4" />
                <label className="ml-1 mr-3">Optimism</label>
                <input type="checkbox" value="Inspiration" id="value5" />
                <label className="ml-1 mr-3">Inspiration</label>
                <input type="checkbox" value="Karma" id="value6" />
                <label className="ml-1 mr-3">Karma</label>
              </div>
              <div className="form-group row">
                <button type="button" className="btn ml-2" data-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn ml-2" id="taskSubmit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikesModal;
