import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Success = (props) => {
    return(
        <div id="successModal" className="modal fade" role="dialog">
            <div className="modal-dialog modal-sm modal-dialog-centered" role="content">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 classname="modal-title">Success!!!</h4>
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                        </button>
                    </div>
                    
                    <div className="modal-body">
                        <div id="successContent" className="form-group row"></div>
                        <div className="form-group row">
                            <button type="button" className="btn" data-dismiss="modal">
                                Okay!!!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Error = (props) => {
    return (
        <div id="errorModal" className="modal fade" role="dialog">
            <div className="modal-dialog modal-sm modal-dialog-centered" role="content">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 classname="modal-title">Oops Something Went Wrong!</h4>
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                        </button>
                    </div>
                    
                    <div className="modal-body">
                        <div id="errorContent"></div>
                        <div className="">
                            <button type="button" className="btn-danger btn-lg" data-dismiss="modal">
                                Okay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
