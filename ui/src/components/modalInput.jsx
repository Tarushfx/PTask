import React from "react";
const ModalInput = (props) => {
  const icons = {
    title: <i className="fas fa-address-card"></i>,
    password: <i className="fas fa-lock" />,
    date: <i className="far fa-clock"></i>,
    error: <i className="fas fa-exclamation-triangle" />,
    interests: <i className="fa fa-thumbs-up" />,
  };

  return (
    <React.Fragment>
      {props.mode == "input" && (
        <div className="input-field">
          {icons[props.iconType]}
          <input
            placeholder={props.placeholder}
            type={props.type}
            id={props.id}
            name={props.name}
            key={props.id}
            onChange={props.onChange}
          />
        </div>
      )}
      {props.mode === "textarea" && (
        <div className="input-field-textarea">
          <textarea
            name={props.name}
            rows="6"
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
          />
        </div>
      )}
      {props.error && props.error[props.name] && (
        <div className="input-field-warn">
          {icons.error}
          <p>{props.error[props.name]}</p>
        </div>
      )}
      <br />
    </React.Fragment>
  );
};

export default ModalInput;
