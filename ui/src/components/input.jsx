import React from "react";

const Input = (props) => {
  const id = `${props.name}${props.form}Form`;
  const icons = {
    title: <i className="fas fa-address-card"></i>,
    email: <i className="fas fa-envelope"></i>,
    password: <i className="fas fa-lock" />,
    date: <i className="far fa-clock"></i>,
    error: <i className="fas fa-exclamation-triangle" />,
  };
  return (
    <React.Fragment>
      <div className="input-field">
        {icons[props.iconType]}
        <input
          placeholder={props.placeholder}
          type={props.type}
          id={id}
          onChange={props.onChange}
          name={props.name}
          key={props.key}
        />
      </div>
      {props.error &&
        props.error[props.name] &&
        props.error[props.name].split(",").map((item, index) => (
          <div className="input-field-warn" key={index + 1}>
            {icons.error}
            <p>{item}</p>
          </div>
        ))}
      <br />
    </React.Fragment>
  );
};

export default Input;
