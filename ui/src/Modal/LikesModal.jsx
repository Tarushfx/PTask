import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ModalInput from "../components/modalInput.jsx";

const LikesModal = (props) => {
  async function handleSubmitLikes(e) {
    e.preventDefault();
    const form = document.forms.likes;
    const str = form.interests.value;
    const likes = str.split(" ");
    for (let i = 1; i <= 5; i++) {
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
                placeholder="Your Interests(space separated)"
                type="text"
                id="interests"
                name="interests"
                iconType="interests"
              />
              <div className="form-group row m-0">
                <div className="msg selected-bg  p-2 border-0">
                  <input
                    type="checkbox"
                    name="msg"
                    value="Motivation"
                    id="value1"
                    className="mail-choice"
                  />
                  <label className="ml-1 mr-3" htmlFor="value1"></label>
                  <label className="ml-1 mr-3">Motivation</label>
                </div>
                {/* <input type="checkbox" value="Motivation" id="value1" />
                <label className="ml-1 mr-3">Motivation</label> */}
                <div className="msg selected-bg  p-2 border-0">
                  <input
                    type="checkbox"
                    name="msg"
                    value="Life"
                    id="value2"
                    className="mail-choice"
                  />
                  <label className="ml-1 mr-3" htmlFor="value2"></label>
                  <label className="ml-1 mr-3">Life</label>
                </div>
                {/* <input type="checkbox" value="Life" id="value2" />
                <label className="ml-1 mr-3">Life</label> */}
                <div className="msg selected-bg  p-2 border-0">
                  <input
                    type="checkbox"
                    name="msg"
                    value="Positivity"
                    id="value3"
                    className="mail-choice"
                  />
                  <label className="ml-1 mr-3" htmlFor="value3"></label>
                  <label className="ml-1 mr-3">Positivity</label>
                </div>
                {/* <input type="checkbox" value="Positivity" id="value3" />
                <label className="ml-1 mr-3">Positivity</label> */}
                {/* </div>
              <div className="form-group row m-0"> */}
                <div className="msg selected-bg  p-2 border-0">
                  <input
                    type="checkbox"
                    name="msg"
                    value="Optimism"
                    id="value4"
                    className="mail-choice"
                  />
                  <label className="ml-1 mr-3" htmlFor="value4"></label>
                  <label className="ml-1 mr-3">Optimism</label>
                </div>
                {/* <input type="checkbox" value="Optimism" id="value4" />
                <label className="ml-1 mr-3">Optimism</label> */}
                <div className="msg selected-bg  p-2 border-0">
                  <input
                    type="checkbox"
                    name="msg"
                    value="Inspirational"
                    id="value5"
                    className="mail-choice"
                  />
                  <label className="ml-1 mr-3" htmlFor="value5"></label>
                  <label className="ml-1 mr-3">Inspirational</label>
                </div>
                {/* <input type="checkbox" value="Inspiration" id="value5" />
                <label className="ml-1 mr-3">Inspiration</label> */}
                {/* <div className="msg selected-bg  p-2 border-0">
                  <input
                    type="checkbox"
                    name="msg"
                    value="Karma"
                    id="value6"
                    className="mail-choice"
                  />
                  <label className="ml-1 mr-3" htmlFor="value6"></label>
                  <label className="ml-1 mr-3">Karma</label>
                </div> */}
                {/* <input type="checkbox" value="Karma" id="value6" />
                <label className="ml-1 mr-3">Karma</label> */}
              </div>
              <div className="form-group row">
                <button type="button" className="btn ml-2" data-dismiss="modal" id="likesModalCancel">
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
