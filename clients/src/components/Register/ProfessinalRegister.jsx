import React, { useState } from "react";
import { useRegis } from "../../contexts/register.jsx";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateLinkdin,
  validatePhoneNumber,
  validateExperience,
  validateEducation,
} from "../../utils/validateRegister.jsx";

import {
  Stack,
  Typography,
  Box,
  Step,
  StepLabel,
  TextField,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  NextButton,
  UploadButton,
  SkipButton,
  OnelineTextField,
  InputLabelStyle,
  StepperStyle,
  RecommendedTypography,
  Datepic,
} from "./Styles.jsx";

import {
  FileUploadOutlined,
  ArrowForwardIos,
  ArrowBackIosNew,
} from "@mui/icons-material";

import EmailInput from "./EmailInput.jsx";
import OnelineInput from "./OnelineInput.jsx";
import MultilineInput from "./MultilineInput.jsx";
import PasswordInput from "./PasswordInput.jsx";

const ProfessionalRegister = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
    phone: "",
    birthday: "",
    linkedin: "",
    title: "",
    experience: "",
    education: "",
  });

  const steps = [
    "Login information",
    "Personal information",
    "Professional information",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [value, setValue] = React.useState(null);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const { isEmailExist, isProfessionalEmailExist } = useRegis();

  const handleNext = async () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 0) {
      await isProfessionalEmailExist(userData.email);
      console.log(isEmailExist);
      const checkPassword = validatePassword(userData.password);
      const checkEmail = validateEmail(userData.email);
      const checkConfirmPassword = validateConfirmPassword(
        userData.password,
        userData.confirmpassword
      );

      if (
        checkEmail &
        checkPassword &
        checkConfirmPassword &
        (isEmailExist === false)
      ) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      }
    }

    if (activeStep === 1) {
      const checkLinkdinUrl = validateLinkdin(userData.linkedin);
      const checkPhoneNumber = validatePhoneNumber(userData.phone);

      if (checkLinkdinUrl || userData.linkedin === "") {
        if (checkPhoneNumber || userData.phone === "") {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setSkipped(newSkipped);
        }
      }
    }

    if (activeStep === 2) {
      const checkExperience = validateExperience(userData.experience);
      const checkEducation = validateEducation(userData.education);

      if (checkExperience || userData.experience === "") {
        if (checkEducation || userData.education === "") {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setSkipped(newSkipped);
        }
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
    console.log(file);
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

  const inputPageTwo = [
    {
      name: "name",
      type: "text",
      placeholder: "John Doe",
      errorMessage: "",
      pattern: /\W+/,
      label: "NAME",
    },
    {
      name: "phone",
      type: "text",
      placeholder: "+66xxxxxxxxx",
      errorMessage: "** Phone number not valid",
      pattern: /^(\+66)(\d{9})$/gm,
      label: "PHONE",
    },
  ];

  const linkedin = {
    name: "linkedin",
    type: "text",
    placeholder: "https://www.linkedin.com/in/username",
    errorMessage: "** Url should be linkedin profile",
    pattern:
      /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gm,
    label: "LINKEDIN URL",
  };

  const inputPageThree = [
    {
      name: "experience",
      type: "text",
      placeholder:
        "Worked 6 years in a bitcoin farm until I decided to cahnge my life...",
      pattern: /.{300,2000}/,
      label: "PROFESSIONAL EXPERIENCE",
      helperText: "Between 300 and 2000 characters",
      errorMessage: "** Should have characters between 300 - 2000 characters",
    },
    {
      name: "education",
      type: "text",
      placeholder: "Major in life experience with a PHD in procrastination",
      pattern: /.{100,2000}/,
      label: "EDUCATION",
      helperText: "Between 100 and 2000 characters",
      errorMessage: "** Should have characters between 100 - 2000 characters",
    },
  ];

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
              {/* FormOne */}
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
        <React.Fragment>
          <Box
            marginTop="36px"
            component="form"
            sx={{ width: "600px" }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <Box marginBottom="10px">
                <RecommendedTypography
                  variant="overline"
                  component="span"
                  sx={{ marginBottom: "20px" }}
                >
                  YOU CAN COMPLETE THIS INFORMATION LATER BUT WE RECCOMEND YOU
                  TO DO IT NOW
                </RecommendedTypography>
              </Box>

              {/* FormTwo */}
              {inputPageTwo.map((input, index) => {
                return (
                  <OnelineInput
                    key={index}
                    {...input}
                    value={userData[input.name]}
                    onChange={handlerInputChange}
                  />
                );
              })}

              <InputLabelStyle>BIRTHDAY</InputLabelStyle>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Datepic
                  value={value}
                  color="primary"
                  focused
                  sx={{ width: "350px", Height: "36px", marginBottom: "16px" }}
                  onChange={(newValue) => {
                    setUserData({
                      ...userData,
                      birthday: newValue.$d,
                    });
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <OnelineInput
                {...linkedin}
                value={userData.linkedin}
                onChange={handlerInputChange}
              />

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
          sx={{ width: "600px" }}
          noValidate
          autoComplete="off"
        >
          <Box>
            <InputLabelStyle>TITLE</InputLabelStyle>
            <OnelineTextField
              onChange={(e) => {
                setUserData({
                  ...userData,
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
            {inputPageThree.map((input, index) => {
              return (
                <MultilineInput
                  key={index}
                  {...input}
                  value={userData[input.name]}
                  onChange={handlerInputChange}
                />
              );
            })}

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

export default ProfessionalRegister;
