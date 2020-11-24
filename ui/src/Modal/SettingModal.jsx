import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import authservice from "../../services/authservice";
import jwt from 'jsonwebtoken';

const SettingModal = () => {

  function handleSubmit(e){
    e.preventDefault();
    const form = document.forms.UpdateUser;
    const token = authservice.getToken();
    const id = jwt.decode(token)._id;
    // try {
    //   if(form.password.value === form.confirmPassword.value && form.password.value.length >= 6)
    // }catch (err){
    //
    // }

  }

  async function deleteUser(){

  }

  return (
    <div id="settingModal" className="modal fade" role="dialog">
      <div className="modal-dialog modal-md modal-dialog-centered" role="content">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Settings</h3>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <form name="UpdateUser" onSubmit={handleSubmit} >
              <div className="form-group">
                <label htmlFor="name" className="col-md-2 col-form-label">
                  Name
                </label>
                <div className="col-md-10">
                  <input type="text" className="form-control form-control-sm mr-1" name="name" id="name" placeholder="Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-md-6 col-form-label">New Password</label>
                <div className="col-md-12">
                  <input type="password" className="form-control form-control-sm mr-1" name="password" placeholder="New Password"/>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="col-md-6 col-form-label">Confirm New Password</label>
                <div className="col-md-12">
                  <input type="password" className="form-control form-control-sm mr-1" name="confirmPassword" placeholder="New Password"/>
                </div>
              </div>

              <div className="form-group row">
                <button type="button" className="btn-danger btn-sm ml-auto" onClick={deleteUser}>Delete Account</button>
                <button type="submit" className="btn-success btn-sm ml-2">Update Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;