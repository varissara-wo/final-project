import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { MultilineTextField, InputLabelStyle } from "./Styles.jsx";

const MultilineInput = (props) => {
  const {
    name,
    label,
    value,
    type,
    placeholder,
    pattern,
    onChange,
    helperText,
    errorMessage,
  } = props;

  const [isValid, setIsValid] = useState(false);

  const validateInput = () => {
    const regex = pattern;
    const isValid = regex.test(value);
    setIsValid(isValid);
  };

  const message = () => {
    if (value === "") {
      return helperText;
    } else if (isValid === false) {
      return errorMessage;
    } else if (isValid === true) {
      console.log("helloo");
      return "";
    }
  };

  useEffect(() => {
    validateInput();
  }, [value]);

  return (
    <>
      <InputLabelStyle>{label}</InputLabelStyle>
      <MultilineTextField
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        defaultValue=""
        style={{ marginBottom: "14px" }}
        color="primary"
        placeholder={placeholder}
        focused
        inputProps={{ style: { padding: "8px" } }}
        helperText={message()}
        FormHelperTextProps={{
          style: { color: isValid || value === "" ? "#8E8E8E" : "#F48FB1" },
        }}
        multiline
        rows={3}
      />
    </>
  );
};

export default MultilineInput;
