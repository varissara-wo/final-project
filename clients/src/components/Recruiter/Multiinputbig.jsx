import React from "react";
import { MultilineTextField, InputLabelStyle } from "../Register/Styles.jsx";

const MultilineInputJobPostBig = (props) => {
  const { label, name, onChange, value, placeholder } = props;

  return (
    <>
      <InputLabelStyle style={{ fontSize: "10px", fontWeight: "500" }}>
        {label}
      </InputLabelStyle>
      <MultilineTextField
        name={name}
        type="text"
        onChange={onChange}
        value={value}
        defaultValue=""
        style={{ marginBottom: "14px", width: "760px " }}
        color="primary"
        placeholder={placeholder}
        focused
        inputProps={{ style: { padding: "8px" } }}
        multiline
        rows={8}
      />
    </>
  );
};

export default MultilineInputJobPostBig;
