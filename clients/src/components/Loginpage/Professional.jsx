import React, { useState, useEffect } from "react";

import { Stack, Typography, Box, Step, StepLabel } from "@mui/material";

import { NextButton, OnelineTextField, InputLabelStyle } from "./Styles.jsx";

import { FileUploadOutlined, ArrowForwardIos } from "@mui/icons-material";

import { useAuth } from "../../contexts/authentication.jsx";

const Professional = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  //validate state
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const { professionalLogin, validate, passwordValid, emailValid } = useAuth();
  console.log(validate);
  const handleSubmit = (event) => {
    professionalLogin({
      email: account.email,
      password: account.password,
    });
  };

  return (
    <>
      <React.Fragment>
        <Box
          marginTop="10px"
          component="form"
          sx={{ width: "650px" }}
          noValidate
          autoComplete="off"
        >
          <Box>
            <InputLabelStyle>EMAIL</InputLabelStyle>
            <Stack direction="row" gap="15px">
              <OnelineTextField
                onChange={(e) => {
                  setAccount({ ...account, email: e.target.value });
                }}
                defaultValue=""
                label=""
                color="primary"
                placeholder="some.user@mail.com"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <Typography
                variant="body2"
                color="primary"
                component="span"
                display="flex"
                flex={1}
              >
                {emailValid}
              </Typography>
            </Stack>
            <InputLabelStyle>PASSWORD</InputLabelStyle>
            <Stack direction="row" gap="15px">
              <OnelineTextField
                onChange={(e) => {
                  setAccount({ ...account, password: e.target.value });
                }}
                defaultValue=""
                label=""
                color="primary"
                placeholder="******"
                focused
                inputProps={{ style: { padding: 8 } }}
                type={showPassword ? "text" : "password"}
              />
              <Typography
                variant="body2"
                color="primary"
                component="span"
                display="flex"
                flex={1}
              >
                {passwordValid}
              </Typography>
            </Stack>

            <Stack display="flex" alignItems="center" width="360px">
              <NextButton
                variant="contained"
                color="primary"
                onClick={(e) => handleSubmit(e)}
              >
                LOGIN
              </NextButton>
            </Stack>
          </Box>
        </Box>
      </React.Fragment>
    </>
  );
};

export default Professional;
