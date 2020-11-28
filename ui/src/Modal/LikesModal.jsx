import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ModalInput from "../components/modalInput.jsx";

const LikesModal = (props) => {

  async function handleSubmitLikes(e){
    e.preventDefault();
    const form = document.forms.likes;
    const str = form.interests.value;
    const likes = str.split(" ");
    const checkbox = document.getElementById("value1")
    if(checkbox.checked){
      likes.push(checkbox.value)
    }
    console.log(str)
    await props.call(likes);
  }

  return(
    <div id="likesModal" className="modal fade" role="dialog">
      <div className="modal-dialog modal-md modal-dialog-centered" role="content">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Tell us your Interests</h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form name="likes" onSubmit={handleSubmitLikes}>
              <ModalInput
                mode="input"
                placeholder="Your Interests"
                type="text"
                id="interests"
                name="interests"
                iconType="interests"
              />
              <div className="form-group row">
                <input type="checkbox" value="value1" id="value1"/><label className="ml-1 mr-3">Value1</label>
                <input type="checkbox" value="value2"/><label className="ml-1 mr-3">Value2</label>
                <input type="checkbox" value="value3"/><label className="ml-1 mr-3">Value3</label>
                <input type="checkbox" value="value4"/><label className="ml-1 mr-3">Value4</label>
                <input type="checkbox" value="value5"/><label className="ml-1 mr-3">Value5</label>
                <input type="checkbox" value="value6"/><label className="ml-1 mr-3">Value6</label>
              </div>
              <div className="form-group row">
                <button
                  type="button"
                  className="btn ml-2"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn ml-2"
                  id="taskSubmit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LikesModal;