import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import { OnelineTextField, InputLabelStyle } from "./Styles.jsx";

const OnelineInput = (props) => {
  const {
    name,
    label,
    value,
    type,
    placeholder,
    errorMessage,
    pattern,
    onChange,
  } = props;

  const [isValid, setIsValid] = useState(false);
  console.log(isValid);

  const validateInput = () => {
    const regex = pattern;
    const isValid = regex.test(value);
    setIsValid(isValid);
  };

  useEffect(() => {
    validateInput();
  }, [value]);

  return (
    <>
      <InputLabelStyle>{label}</InputLabelStyle>
      <Stack direction="row" gap="15px">
        <OnelineTextField
          defaultValue=""
          color="primary"
          focused
          inputProps={{ style: { padding: 8 } }}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        <Stack flex={1}>
          <Typography
            variant="body2"
            color="primary"
            component="span"
            display="flex"
          >
            {isValid ? "" : errorMessage}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default OnelineInput;
