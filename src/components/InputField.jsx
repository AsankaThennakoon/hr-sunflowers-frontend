import React from "react";

const InputField = ({ type, name, placeholder, value, onChange ,htmlFor,label}) => (
  <div className="mb-3">
    <label htmlFor={htmlFor}>
      <strong>{label}:</strong>
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="form-control rounded-0"
    />
  </div>
);

export default InputField;
