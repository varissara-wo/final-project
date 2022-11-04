import React, { useState } from "react";

import { Stack, Typography, Box, Step, StepLabel, styled } from "@mui/material";

import {
  NextButton,
  UploadButton,
  SkipButton,
  OnelineTextField,
  MultilineTextField,
  InputLabelStyle,
  StepperStyle,
  RecommendedTypography,
} from "./Styles.jsx";

import {
  FileUploadOutlined,
  ArrowForwardIos,
  ArrowBackIosNew,
  AccountBoxOutlined,
} from "@mui/icons-material";

const Professional = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    phone: "",
    birthday: "",
    linkedin: "",
    title: "",
    experience: "",
    education: "",
  });

  const [validate, setValidate] = useState({
    password: "",
    confirmPassword: "",
    linkedinUrl: "",
    phoneNumber: "",
    experience: "Between 300 and 2000 characters",
    education: "Between 100 and 2000 characters",
  });

  // validate linkdin url

  const steps = [
    "Login information",
    "Personal information",
    "Professional information",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [validateExperienceColor, setValidateExperienceColor] = useState("");

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  //validate linkdin url
  const validateLinkdin = (url) => {
    const linkedinRegex =
      /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gm;
    const isUrlValid = linkedinRegex.test(url);
    return isUrlValid;
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
    const isPasswordValid = passwordRegex.test(password);
    return isPasswordValid;
  };

  const validatePhoneNumber = (number) => {
    const phoneNumberRegex =
      /^\+?([0-9]{2})\)?[-. ]?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const isPhoneNumberValid = phoneNumberRegex.test(number);
    return isPhoneNumberValid;
  };

  const validateExperience = (context) => {
    const experienceRegex = /^\w{300,2000}$/;
    const isExperienceValid = experienceRegex.test(context);
    return isExperienceValid;
  };

  const validateEducation = (context) => {
    const educationRegex = /^\w{100,2000}$/;
    const isEducationValid = educationRegex.test(context);
    return isEducationValid;
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 0) {
      const checkPassword = validatePassword(account.password);
      if (checkPassword) {
        setValidate({ ...validate, password: "" });
        if (account.password === account.passwordConfirmation) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setSkipped(newSkipped);
          setValidate({ ...validate, confirmPassword: "" });
        } else {
          setValidate({
            ...validate,
            confirmPassword: "** Password not match",
          });
        }
      } else {
        setValidate({
          ...validate,
          password:
            "** Password should have at least one numeric digit, one special character, one uppercase and one lowercase letter",
        });
      }
    }

    if (activeStep === 1) {
      const checkLinkdinUrl = validateLinkdin(account.linkedin);
      const checkPhoneNumber = validatePhoneNumber(account.phone);

      if (checkLinkdinUrl || account.linkedin === "") {
        setValidate({ ...validate, linkedinUrl: "" });
        if (checkPhoneNumber || account.phone === "") {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setSkipped(newSkipped);
          setValidate({ ...validate, linkedinUrl: "" });
        } else {
          setValidate({
            ...validate,
            phoneNumber: "** Phonenumber not collect",
          });
        }
      } else {
        setValidate({
          ...validate,
          linkedinUrl: "** Url should be linkedin profile",
        });
      }
    }

    if (activeStep === 2) {
      const checkExperience = validateExperience(account.experience);
      const checkEducation = validateEducation(account.education);
      if (checkExperience || account.experience === "") {
        if (checkEducation || account.education === "") {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setSkipped(newSkipped);
        } else {
          setValidate({
            ...validate,
            education:
              "** Should have characters between 100 - 2000 characters",
          });
        }
      } else {
        setValidateExperienceColor("#F48FB1");
        setValidate({
          ...validate,
          experience: "** Should have characters between 300 - 2000 characters",
        });
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
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

  return (
    <>
      <StepperStyle activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label}>
              <StepLabel width="600px">
                {activeStep === 0 && (
                  <Typography variant="overline" component="p" color="warining">
                    {index === 0 ? "IN PROGRESS" : "PENDING"}
                  </Typography>
                )}
                {activeStep === 1 && (
                  <Typography variant="overline" component="p" color="warining">
                    {index === 0
                      ? "DONE!"
                      : index === 2
                      ? "IN PROGRESS"
                      : "PENDING"}
                  </Typography>
                )}
                {activeStep === 2 && (
                  <Typography variant="overline" component="p" color="warining">
                    {index === 0
                      ? "DONE!"
                      : index === 2
                      ? "DONE!"
                      : "IN PROGRESS"}
                  </Typography>
                )}
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </StepperStyle>
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
              <InputLabelStyle>EMAIL</InputLabelStyle>
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
                />
                <Typography
                  variant="body2"
                  color="primary"
                  component="span"
                  display="flex"
                  flex={1}
                >
                  {validate.password}
                </Typography>
              </Stack>

              <InputLabelStyle>PASSWORD CONFIRMATION</InputLabelStyle>
              <Stack direction="row" gap="15px">
                <OnelineTextField
                  onChange={(e) => {
                    setAccount({
                      ...account,
                      passwordConfirmation: e.target.value,
                    });
                  }}
                  defaultValue=""
                  label=""
                  color="primary"
                  placeholder="******"
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
                  {validate.confirmPassword}
                </Typography>
              </Stack>

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
        <React.Fragment>
          <Box
            marginTop="36px"
            component="form"
            sx={{ width: "600px" }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <RecommendedTypography variant="overline" component="span">
                YOU CAN COMPLETE THIS INFORMATION LATER BUT WE RECCOMEND YOU TO
                DO IT NOW
              </RecommendedTypography>
              <InputLabelStyle sx={{ marginTop: "10px" }}>NAME</InputLabelStyle>
              <OnelineTextField
                onChange={(e) => {
                  setAccount({
                    ...account,
                    name: e.target.value,
                  });
                }}
                defaultValue=""
                label=""
                color="primary"
                placeholder="John Doe"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <InputLabelStyle>PHONE</InputLabelStyle>
              <Stack direction="row" gap="15px">
                <OnelineTextField
                  onChange={(e) => {
                    setAccount({
                      ...account,
                      phone: e.target.value,
                    });
                  }}
                  value={account.phone}
                  defaultValue=""
                  label=""
                  color="primary"
                  placeholder="+xx xxxxxxxxx"
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
                  {validate.phoneNumber}
                </Typography>
              </Stack>

              <InputLabelStyle>BIRTHDAY</InputLabelStyle>
              <OnelineTextField
                onChange={(e) => {
                  setAccount({
                    ...account,
                    birthday: e.target.value,
                  });
                }}
                defaultValue=""
                label=""
                color="primary"
                placeholder="Pick a date"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <InputLabelStyle>LINKEDIN URL</InputLabelStyle>
              <Stack direction="row" gap="15px">
                <OnelineTextField
                  value={account.linkedin}
                  flex={2}
                  onChange={(e) => {
                    setAccount({
                      ...account,
                      linkedin: e.target.value,
                    });
                  }}
                  defaultValue=""
                  label=""
                  color="primary"
                  placeholder="https://www.linkedin.com/in/username"
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
                  {validate.linkedinUrl}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                display="flex"
                justifyContent="center"
                gap="15px"
                width="360px"
              >
                <SkipButton
                  variant="outlined"
                  color="primary"
                  onClick={handleSkip}
                >
                  SKIP THIS!
                </SkipButton>
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
      {activeStep === 2 && (
        <Box
          marginTop="36px"
          component="form"
          sx={{ width: "360px" }}
          noValidate
          autoComplete="off"
        >
          <Box>
            <InputLabelStyle>TITLE</InputLabelStyle>
            <OnelineTextField
              onChange={(e) => {
                setAccount({
                  ...account,
                  title: e.target.value,
                });
              }}
              defaultValue=""
              label=""
              color="primary"
              placeholder="Mechanical administrator..."
              focused
              inputProps={{ style: { padding: 8 } }}
            />
            <InputLabelStyle>PROFESSIONAL EXPERIENCE</InputLabelStyle>
            <MultilineTextField
              onChange={(e) => {
                setAccount({
                  ...account,
                  experience: e.target.value,
                });
              }}
              defaultValue=""
              style={{ marginBottom: "14px" }}
              label=""
              color="primary"
              placeholder="Worked 6 years in a bitcoin farm until I decided to change my life..."
              focused
              inputProps={{ style: { padding: "8px" } }}
              helperText={validate.experience}
              FormHelperTextProps={{
                style: { color: validateExperienceColor },
              }}
              multiline
              rows={3}
            />
            <InputLabelStyle>EDUCATION</InputLabelStyle>
            <MultilineTextField
              onChange={(e) => {
                setAccount({
                  ...account,
                  education: e.target.value,
                });
              }}
              defaultValue=""
              style={{ marginBottom: "14px" }}
              label=""
              color="primary"
              placeholder="Major in life experiences with a PHD in procrastination..."
              focused
              inputProps={{ style: { padding: "8px" } }}
              helperText="Between 100 and 2000 characters"
              multiline
              rows={3}
            />

            <InputLabelStyle>UPLOAD/UPDATE YOUR CV</InputLabelStyle>
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
              width="360px"
            >
              <NextButton
                startIcon={<ArrowBackIosNew />}
                variant="contained"
                color="primary"
                onClick={handleBack}
              >
                PREVIOUS
              </NextButton>
              <SkipButton
                onClick={handleNext}
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

export default Professional;
