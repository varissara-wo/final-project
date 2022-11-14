import React, { useState, useEffect } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Stack, Typography, InputAdornment, IconButton } from "@mui/material";
import { OnelineTextField, InputLabelStyle } from "./Styles.jsx";

const PasswordInput = (props) => {
  const { name, label, value, errorMessage, pattern, onChange } = props;

  const [values, setValues] = useState({
    showPassword: false,
  });

  const [isValid, setIsValid] = useState(false);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const validateInput = () => {
    const regex = pattern;
    const isValid = regex.test(value);
    setIsValid(isValid);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          type={values.showPassword ? "text" : "password"}
          placeholder="******"
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            style: { backgroundColor: "#fff" },
          }}
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

export default PasswordInput;
