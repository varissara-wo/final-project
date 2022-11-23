import React from "react";
import { OnelineTextField, InputLabelStyle } from "../Register/Styles.jsx";

const OnelineInputJobPost = (props) => {
  const { label, name, onChange, value, placeholder } = props;
  console.log(value);
  return (
    <>
      <InputLabelStyle style={{ fontSize: "10px", fontWeight: "500" }}>
        {label}
      </InputLabelStyle>
      <OnelineTextField
        defaultValue=""
        color="primary"
        focused
        inputProps={{ style: { padding: 8 } }}
        name={name}
        value={value}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        style={{
          width: "360px ",
          marginBottom: "4px",
        }}
      />
    </>
  );
};

export default OnelineInputJobPost;
