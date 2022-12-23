import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState("false");
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        focused={focused}
        onFocus={() => inputProps.name === "comfirmPassword" && setFocused("true")}
        required
        onBlur={() => setFocused("true")}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
