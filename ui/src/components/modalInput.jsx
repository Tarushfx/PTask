import React from "react";
const ModalInput = (props) => {
  return (
    <React.Fragment>
      {props.mode == "input" && (
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            placeholder={props.placeholder}
            type={props.type}
            id={props.id}
            name={props.name}
            key={props.id}
          />
        </div>
      )}
      {props.mode === "textarea" && (
        <div className="input-field-textarea">
          <textarea name="desc" rows="8" id="desc"></textarea>
        </div>
      )}
    </React.Fragment>
  );
};

export default ModalInput;
