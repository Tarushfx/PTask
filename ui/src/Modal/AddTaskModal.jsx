import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const AddTaskModal = () => {
  function handleSubmitTask() {

  }

  return (
    <div id="taskModal" className="modal fade" role="dialog">
      <div className="modal-dialog modal-md" role="content">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Add a Task</h3>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="title" className="col-md-2 col-form-label">
                  Title
                </label>
                <div className="col-md-10">
                  <input type="text" className="form-control form-control-sm mr-1" name="title" id="title" placeholder="Title" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="desc" className="col-md-2 col-form-label">Description</label>
                <div className="col-md-12">
                  <textarea name="desc" rows="6" className="form-control mr-1" id="desc" placeholder="Description"></textarea>
                </div>
              </div>

              <div className="form-group row">
                <button type="button" className="btn-danger btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn-success btn-sm ml-2">Add Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;