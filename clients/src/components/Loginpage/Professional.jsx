import React, { useState } from "react";

import { Stack, Typography, Box, Step, StepLabel } from "@mui/material";

import { NextButton, OnelineTextField, InputLabelStyle } from "./Styles.jsx";

import { FileUploadOutlined, ArrowForwardIos } from "@mui/icons-material";

import { useAuth } from "../../contexts/professionalAuth.jsx";

const Professional = () => {
  const { login, state } = useAuth();

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  //validate state
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  //validate form input
  // const validatePassword = (password) => {
  //     let isPass = false;
  //     const passwordMessage =
  //         "** Password should have at least one numeric digit, one special character, one uppercase and one lowercase letter";
  //     const passwordRegex =
  //         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
  //     const isPasswordValid = passwordRegex.test(password);
  //     if (isPasswordValid) {
  //         setPasswordMessage("");
  //         isPass = true;
  //     } else {
  //         setPasswordMessage(passwordMessage);
  //     }
  //     return isPass;
  // };

  // const validateEmail = (email) => {
  //     const emailMessage = "** Email is not valid";
  //     let isPass = false;
  //     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     const isEmailValid = emailRegex.test(email);
  //     if (isEmailValid) {
  //         setEmailMessage("");
  //         isPass = true;
  //     } else {
  //         setEmailMessage(emailMessage);
  //     }
  //     return isPass;
  // };

  const handleSubmit = (event) => {
    console.log(login);
    login({
      email: account.email,
      password: account.password,
    });
    console.log(state);
    event.preventDefalt();
  };

  // const [activeStep, setActiveStep] = React.useState(0);
  // const [skipped, setSkipped] = React.useState(new Set());

  // const isStepSkipped = (step) => {
  //     return skipped.has(step);
  // };

  // const handleNext = () => {
  //     let newSkipped = skipped;
  //     if (isStepSkipped(activeStep)) {
  //         newSkipped = new Set(newSkipped.values());
  //         newSkipped.delete(activeStep);
  //     }

  //     if (activeStep === 0) {
  //         // const checkPassword = validatePassword(account.password);
  //         // const checkEmail = validateEmail(account.email);

  //         if (checkEmail & checkPassword) {
  //             setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //             setSkipped(newSkipped);
  //         }
  //     }
  // };

  const [showPassword, setShowPassword] = useState(false);

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
                {emailMessage}
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
                {passwordMessage}
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
