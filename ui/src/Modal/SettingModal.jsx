import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SettingModal = () => {
  return (
    <div id="settingModal" className="modal fade" role="dialog">
      <div className="modal-dialog modal-md modal-dialog-centered" role="content">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Settings</h3>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            <form>
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
                <button type="button" className="btn-danger btn-sm ml-auto">Delete Account</button>
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