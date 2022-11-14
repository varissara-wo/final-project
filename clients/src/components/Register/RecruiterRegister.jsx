import React, { useState } from "react";

import { Stack, Typography, Box, Step, StepLabel } from "@mui/material";

import {
  NextButton,
  UploadButton,
  SkipButton,
  OnelineTextField,
  MultilineTextField,
  InputLabelStyle,
  RecruiterStepper,
  RecommendedTypography,
} from "./Styles.jsx";

import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validateRegister.jsx";

import EmailInput from "./EmailInput.jsx";
import OnelineInput from "./OnelineInput.jsx";
import MultilineInput from "./MultilineInput.jsx";
import PasswordInput from "./PasswordInput.jsx";

import { FileUploadOutlined, ArrowForwardIos } from "@mui/icons-material";

const RecruiterRegister = () => {
  const steps = ["Login information", "Company information"];
  const [account, setAccount] = useState({
    companyName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    website: "",
    about: "",
  });

  const [userData, setUserData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmpassword: "",
    website: "",
    about: "",
  });

  const [validate, setValidate] = useState({
    about: "Between 100 and 2000 characters",
    useremail: "",
    companyName: "",
  });

  //validate state
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const [color, setColor] = useState({ about: "" });

  //validate form input
  //   const validatePassword = (password) => {
  //     let isPass = false;
  //     const passwordMessage =
  //       "** Password should have at least one numeric digit, one special character, one uppercase and one lowercase letter";
  //     const notMatch = "** Password not match";
  //     const passwordRegex =
  //       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
  //     const isPasswordValid = passwordRegex.test(password);
  //     if (isPasswordValid) {
  //       setPasswordMessage("");
  //       isPass = true;
  //     } else {
  //       setPasswordMessage(passwordMessage);
  //     }
  //     return isPass;
  //   };

  //   const validateConfirmPassword = (password) => {
  //     let isPass = false;
  //     const notMatch = "** Password not match";
  //     if (
  //       (account.password === account.passwordConfirmation) &
  //       (account.password !== "")
  //     ) {
  //       setConfirmPasswordMessage("");
  //       isPass = true;
  //     } else if (
  //       (account.password === account.passwordConfirmation) &
  //       (account.password === "")
  //     ) {
  //       setConfirmPasswordMessage(notMatch);
  //     } else if (account.password !== account.passwordConfirmation) {
  //       setConfirmPasswordMessage(notMatch);
  //     } else if (account.password === account.passwordConfirmation) {
  //       setConfirmPasswordMessage("");
  //     }
  //     return isPass;
  //   };

  //   const validateEmail = (email) => {
  //     const emailMessage = "** Email is not valid";
  //     let isPass = false;
  //     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     const isEmailValid = emailRegex.test(email);
  //     if (isEmailValid) {
  //       setEmailMessage("");
  //       isPass = true;
  //     } else {
  //       setEmailMessage(emailMessage);
  //     }
  //     return isPass;
  //   };

  //   const validateCompanyName = () => {
  //     const message = "** Company name is not valid";
  //     let isPass = false;
  //     if (account.companyName !== "") {
  //       setValidate({ ...validate, companyName: "" });
  //       isPass = true;
  //     } else {
  //       setValidate({ ...validate, companyName: message });
  //     }
  //     return isPass;
  //   };

  const validateAbout = (context) => {
    const aboutRegex = /^\w{100,2000}$/;
    const isAboutValid = aboutRegex.test(context);
    return isAboutValid;
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 0) {
      const checkPassword = validatePassword(account.password);
      const checkEmail = validateEmail(account.email);
      //   const checkCompanyName = validateCompanyName();
      const checkConfirmPassword = validateConfirmPassword();

      if (
        checkEmail &
        checkPassword &
        // checkCompanyName &
        checkConfirmPassword
      ) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      }
    }

    if (activeStep === 1) {
      const checkAbout = validateAbout(account.about);

      if (checkAbout || account.about === "") {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      } else {
        setColor({ ...color, about: "#F48FB1" });
        setValidate({
          ...validate,
          about: "** Should have characters between 100 - 2000 characters",
        });
      }
    }
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  //handleFileChange for file upload validation
  const innitialFileData = "No file chosen";
  const [fileStatus, setFileStatus] = useState(innitialFileData);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    //Validate the file is PDF
    if (file.type !== "application/pdf") {
      return setFileStatus("Not a PDF file");
    }
    //Validate the file PDF size less than 5 MB

    if (file.size > 5 * 1024 * 1024) {
      return setFileStatus("File size more than 5 MB");
    } else {
      setFileStatus(`File ${file.name}`);
      return file;
    }
  };

  const handlerInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const companyNameInput = [
    {
      name: "name",
      type: "text",
      placeholder: "MY Company S.A Doe",
      errorMessage: "** Company name is not valid",
      pattern: /^.*\w+.*$/,
      label: "NAME",
    },
  ];

  const passwordInput = [
    {
      name: "password",
      errorMessage:
        "** Password should have at least one numeric digit, one special character, one uppercase and one lowercase letter",
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/,
      label: "PASSWORD",
    },
    {
      name: "confirmpassword",
      errorMessage: "** Password not match",
      pattern: new RegExp(userData.password),
      label: "PASSWORD CONFIRMATION",
    },
  ];

  const aboutInput = [
    {
      name: "about",
      type: "text",
      placeholder: "My Company SA has the vision to change the way how...",
      pattern: /.{100,2000}/,
      label: "ABOUT THE COMPANY",
      helperText: "Between 100 and 2000 characters",
      errorMessage: "** Should have characters between 100 - 2000 characters",
    },
  ];

  //   My Company SA has the vision to change the way how...

  return (
    <>
      <RecruiterStepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label}>
              <StepLabel>
                {activeStep === 0 && (
                  <Typography variant="overline" component="p" color="warining">
                    {index === 0 ? "IN PROGRESS" : "PENDING"}
                  </Typography>
                )}
                {activeStep === 1 && (
                  <Typography variant="overline" component="p" color="warining">
                    {index === 0 ? "DONE!" : "IN PROGRESS"}
                  </Typography>
                )}

                {label}
              </StepLabel>
            </Step>
          );
        })}
      </RecruiterStepper>
      {activeStep === 0 && (
        <React.Fragment>
          <Box
            marginTop="36px"
            component="form"
            sx={{ width: "650px" }}
            noValidate
            autoComplete="off"
          >
            <Box>
              {companyNameInput.map((input, index) => {
                return (
                  <OnelineInput
                    key={index}
                    {...input}
                    value={userData[input.name]}
                    onChange={handlerInputChange}
                  />
                );
              })}

              <EmailInput
                value={userData.email}
                onChange={handlerInputChange}
              />

              {passwordInput.map((input, index) => {
                return (
                  <PasswordInput
                    key={index}
                    {...input}
                    value={userData[input.name]}
                    onChange={handlerInputChange}
                  />
                );
              })}

              <Stack display="flex" alignItems="center" width="360px">
                <NextButton
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  endIcon={<ArrowForwardIos />}
                >
                  Next
                </NextButton>
              </Stack>
            </Box>
          </Box>
        </React.Fragment>
      )}

      {activeStep === 1 && (
        <Box
          marginTop="36px"
          component="form"
          sx={{ width: "360px" }}
          noValidate
          autoComplete="off"
        >
          <Box>
            <RecommendedTypography variant="overline" component="span">
              YOU CAN COMPLETE THIS INFORMATION LATER BUT WE RECCOMEND YOU TO DO
              IT NOW
            </RecommendedTypography>

            <InputLabelStyle style={{ marginTop: "10px" }}>
              COMPANY WEBSITE
            </InputLabelStyle>
            <OnelineTextField
              onChange={(e) => {
                setAccount({ ...account, website: e.target.value });
              }}
              defaultValue=""
              label=""
              color="primary"
              placeholder="https://www.mycompany.sa"
              focused
              inputProps={{ style: { padding: 8 } }}
            />

            <InputLabelStyle>ABOUT THE COMPANY</InputLabelStyle>
            <MultilineTextField
              onChange={(e) => {
                setAccount({ ...account, about: e.target.value });
              }}
              defaultValue=""
              style={{ marginBottom: "14px" }}
              label=""
              color="primary"
              placeholder="My Company SA has the vision to change the way how..."
              focused
              inputProps={{ style: { padding: "8px" } }}
              helperText={validate.about}
              multiline
              rows={3}
              value={account.about}
              FormHelperTextProps={{
                style: { color: color.about },
              }}
            />

            <InputLabelStyle>UPLOAD THE COMPANY LOGO</InputLabelStyle>
            <UploadButton
              startIcon={<FileUploadOutlined />}
              variant="contained"
              component="label"
              color="primary"
              helperText="hi"
              position="relative"
            >
              Choose a file
              <input
                left="10px"
                hidden
                width="300px"
                accept=".pdf"
                multiple
                type="file"
                onChange={handleFileChange}
              />
            </UploadButton>

            <Typography component="span" variant="body2" color="secondary.main">
              {fileStatus}
            </Typography>

            <Typography
              component="p"
              variant="body2"
              marginTop="4px"
              color="info.main"
              textTransform="none"
            >
              Only PDF. Max size 5MB
            </Typography>
            <Stack
              direction="row"
              display="flex"
              justifyContent="center"
              gap="15px"
            >
              <SkipButton
                onClick={handleSkip}
                variant="outlined"
                color="primary"
              >
                SKIP THIS!
              </SkipButton>
              <NextButton
                endIcon={<ArrowForwardIos />}
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                FINISH
              </NextButton>
            </Stack>
          </Box>
        </Box>
      )}
    </>
  );
};

export default RecruiterRegister;
