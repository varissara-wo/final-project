import React, { useState } from "react";

import {
  Stack,
  Typography,
  Box,
  Step,
  StepLabel,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  NextButton,
  UploadButton,
  SkipButton,
  OnelineTextField,
  MultilineTextField,
  InputLabelStyle,
  StepperStyle,
  RecommendedTypography,
  Datepic,
  IconButton,
  InputAdornment,
} from "./Styles.jsx";

import {
  FileUploadOutlined,
  ArrowForwardIos,
  ArrowBackIosNew,
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
    useremail: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    console.log(showPassword);
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => setShowPassword(true);
  const steps = [
    "Login information",
    "Personal information",
    "Professional information",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [color, setColor] = useState({ experience: "", education: "" });
  const [value, setValue] = React.useState(null);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  //validate form input
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

  const validateEmail = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isEmailValid = emailRegex.test(email);
    return isEmailValid;
  };

  const validatePhoneNumber = (number) => {
    const phoneNumberRegex = /^(\+66)(\d{9})$/gm;
    const isPhoneNumberValid = phoneNumberRegex.test(number);
    return isPhoneNumberValid;
  };

  const validateExperience = (context) => {
    const experienceRegex = /.{300,2000}/;
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
      const checkEmail = validateEmail(account.email);
      console.log(checkEmail);

      //Invalid message
      const emailMessage = "** Email is not valid";
      const passwordMessage =
        "** Password should have at least one numeric digit, one special character, one uppercase and one lowercase letter";
      const notMatch = "** Password not match";

      if (
        checkEmail &
        checkPassword &
        (account.password === account.passwordConfirmation)
      ) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      } else if ((checkEmail === false) & (checkPassword === false)) {
        setValidate({
          ...validate,
          useremail: emailMessage,
          password: passwordMessage,
        });
      } else if ((checkEmail === true) & (checkPassword === false)) {
        setValidate({ ...validate, useremail: "", password: passwordMessage });
      } else if (
        (checkEmail === false) &
        (checkPassword === true) &
        (account.password === account.passwordConfirmation)
      ) {
        setValidate({ ...validate, useremail: emailMessage, password: "" });
      } else if (
        (checkEmail === true) &
        (checkPassword === true) &
        (account.password !== account.passwordConfirmation)
      ) {
        setValidate({
          ...validate,
          useremail: "",
          password: "",
          confirmPassword: notMatch,
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

      if (
        checkExperience & checkEducation ||
        (account.experience === "") & (account.education === "")
      ) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      } else if ((checkExperience === false) & (checkEducation === false)) {
        //experience & education
        setColor({ ...color, experience: "#F48FB1", education: "#F48FB1" });
        setValidate({
          ...validate,
          experience: "** Should have characters between 300 - 2000 characters",
          education: "** Should have characters between 100 - 2000 characters",
        });
      } else if ((checkExperience === true) & (checkEducation === false)) {
        setColor({ ...color, experience: "", education: "#F48FB1" });
        setValidate({
          ...validate,
          experience: "Between 300 and 2000 characters",
          education: "** Should have characters between 100 - 2000 characters",
        });
      } else if ((checkExperience === false) & (checkEducation === true)) {
        setColor({ ...color, experience: "#F48FB1", education: "" });
        setValidate({
          ...validate,
          experience: "** Should have characters between 300 - 2000 characters",
          education: "Between 100 and 2000 characters",
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
    console.log(file)
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
                  {validate.useremail}
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
                  // inputProps={{ style: { padding: 8 },endAdornment: <InputAdornment position="end"><Visibility/></InputAdornment>,}}

                  // endIcon={<IconButton
                  //   onClick={() => setShowPassword(!showPassword)}
                  //   onMouseDown={() => console.log("hija")}
                  // >
                  //   {showPassword ? <Visibility /> : <VisibilityOff />}
                  // </IconButton>}
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
                  value={account.passwordConfirmation}
                  type={
                    account.passwordConfirmation.showPassword
                      ? "text"
                      : "password"
                  }
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
                  placeholder="+66xxxxxxxxx"
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Datepic
                  value={value}
                  color="primary"
                  focused
                  sx={{ width: "350px", Height: "36px", marginBottom: "16px" }}
                  onChange={(newValue) => {
                    setAccount({
                      ...account,
                      birthday: newValue.$d,
                    });
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
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
          sx={{ width: "600px" }}
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
              value={account.experience}
              defaultValue=""
              style={{ marginBottom: "14px" }}
              label=""
              color="primary"
              placeholder="Worked 6 years in a bitcoin farm until I decided to change my life..."
              focused
              inputProps={{ style: { padding: "8px" } }}
              helperText={validate.experience}
              FormHelperTextProps={{
                style: { color: color.experience },
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
              FormHelperTextProps={{
                style: { color: color.education },
              }}
              helperText={validate.education}
              multiline
              rows={3}
              value={account.education}
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
