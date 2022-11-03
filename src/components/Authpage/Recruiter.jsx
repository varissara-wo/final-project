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

import { FileUploadOutlined, ArrowForwardIos } from "@mui/icons-material";

const Recruiter = () => {
  const steps = ["Login information", "Company information"];

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

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const [account, setAccount] = useState({
    companyName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    website: "",
    about: "",
  });

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
            sx={{ width: "360px" }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <InputLabelStyle>COMPANY NAME</InputLabelStyle>
              <OnelineTextField
                onChange={(e) => {
                  setAccount({ ...account, companyName: e.target.value });
                }}
                defaultValue=""
                label=""
                color="primary"
                placeholder="MY Company S.A"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
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

export default Recruiter;
