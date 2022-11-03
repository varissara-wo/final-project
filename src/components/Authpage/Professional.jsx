import React, { useState } from "react";

import { Stack, Typography, Box, Step, StepLabel } from "@mui/material";

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
} from "@mui/icons-material";

const Professional = () => {
  const steps = [
    "Login information",
    "Personal information",
    "Professional information",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
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
              <StepLabel>
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
            sx={{ width: "360px" }}
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
              <InputLabelStyle>PASSWORD CONFIRMATION</InputLabelStyle>
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
              <Stack display="flex" alignItems="center">
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
            sx={{ width: "360px" }}
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
              <OnelineTextField
                onChange={(e) => {
                  setAccount({
                    ...account,
                    phone: e.target.value,
                  });
                }}
                defaultValue=""
                label=""
                color="primary"
                placeholder="+xxxxxxxxx"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
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
              <OnelineTextField
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
              <Stack
                direction="row"
                display="flex"
                justifyContent="center"
                gap="15px"
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
              helperText="Between 300 and 2000 characters"
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
                accept="image/*"
                multiple
                type="file"
              />
            </UploadButton>

            <Typography component="span" variant="body2" color="secondary.main">
              No file chosen
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
              <NextButton
                startIcon={<ArrowBackIosNew />}
                variant="contained"
                color="primary"
                onClick={handleBack}
              >
                PREVIUS
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
