import React from "react";

const Input = (props) => {
  const id = `${props.name}${props.form}Form`;
  return (
    <React.Fragment>
      <div className="input-field">
        <i className="fas fa-lock" />
        <input
          placeholder={props.placeholder}
          onChange={props.handleChange}
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
            <i className="fas fa-exclamation-triangle" />
            <p>{item}</p>
          </div>
        ))}
      <br />
    </React.Fragment>
  );
};

export default Input;
