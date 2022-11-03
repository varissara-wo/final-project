import React from "react";
import {
  Stack,
  Typography,
  Box,
  Tabs,
  Tab,
  Stepper,
  StepButton,
  Step,
  Button,
  StepLabel,
  ImageListItem,
  styled,
  TextField,
  InputLabel,
} from "@mui/material";

import {
  FileUploadOutlined,
  ArrowForwardIos,
  ArrowBackIosNew,
} from "@mui/icons-material";

const ButtonStyle = styled(Button)(() => ({
  fontFamily: "var( --inter-font)",
  fontWeight: "500",
  fontSize: "14px",
  borderRadius: "16px",
  padding: "8px 16px",
  marginTop: "16px",
  width: "115px",
}));

const UploadButton = styled(ButtonStyle)(() => ({
  borderRadius: "8px",
  width: "180px",
  marginTop: "0px",
  marginRight: "5px",
}));

const OutlineButtonStyle = styled(ButtonStyle)(() => ({
  color: "#616161",
  border: "1px solid #F48FB1",
}));

const TextFieldStyle = styled(TextField)(() => ({
  width: "350px",
  Height: "36px",
  marginBottom: "16px",
  "& .MuilinedInput-root": {
    "& fieldset": {
      borderRadius: "8px",
    },
  },
}));

const TextFieldStyle2 = styled(TextField)(() => ({
  width: "350px",
  Height: "36px",
  marginBottom: "16px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "8px",
    },
  },
}));

const MultilineTextFieldStyle = styled(TextField)(() => ({
  width: "600px",
  "& .css-ivu46s-MuiInputBase-root-MuiOutlinedInput-root": {
    padding: "0px",
  },
  "& .css-1h8391f-MuiFormHelperText-root": {
    marginLeft: "0px",
    fontSize: "14px",
  },
  "& .css-1h8391f-MuiFormHelperText-root ": {
    color: "#8E8E8E",
  },
}));

const InputLabelStyle = styled(InputLabel)(() => ({
  fontFamily: "var( --inter-font)",
  fontSize: "12px",
  color: "#373737",
  fontWeight: "400",
  marginBottom: "3px",
}));

const StepperStyle = styled(Stepper)(() => ({
  "& .css-z7uhs0-MuiStepConnector-line ": {
    display: "none",
  },
  marginTop: "20px",
  "& .css-1m8sh6p-MuiSvgIcon-root-MuiStepIcon-root": {
    width: "32px",
    height: "32px",
  },
  "& .css-1rstrof-MuiStepIcon-text": {
    fontFamily: "var(--montserrat-font)",
    fontSize: "16px",
    fontWeight: "400",
  },
  "& .css-dpf8ng-MuiStepLabel-label.Mui-active": {
    color: "#373737",
    fontSize: "16px",
    fontWeight: "400",
  },
  "& .css-dpf8ng-MuiStepLabel-label.Mui-completed": {
    color: "#616161",
    fontSize: "16px",
    fontWeight: "400",
  },
  "& .css-dpf8ng-MuiStepLabel-label": {
    color: "#8E8E8E",
    fontSize: "16px",
    fontWeight: "400",
  },
  "& .css-vnkopk-MuiStepLabel-iconContainer": {
    marginBottom: "28px",
  },
}));

const Auth = () => {
  const steps = [
    "Login information",
    "Personal information",
    "Professional information",
  ];

  const [value, setValue] = React.useState("professional");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // -------------form logic------------
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

  return (
    <Stack width="100%" alignItems="center">
      <Stack
        direction="row"
        padding="0px"
        width="100%"
        height="100%"
        maxWidth="1440px"
        maxHeight="900px"
        justifyContent="center"
      >
        <Box flex={1} p={10} paddingLeft="188px">
          <Typography variant="h3" marginBottom="16px" color="warning">
            Good choice!
          </Typography>
          <Typography variant="h6" marginBottom="18px" color="warining">
            Create a new account as...
          </Typography>
          <Tabs
            color="Pink"
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab
              value="professional"
              label="PROFESSIONAL"
              sx={{
                fontFamily: "var(--inter-font)",
                fontWeight: "500",
                borderBottom: "2px solid #BDBDBD",
                padding: "0px",
              }}
            />
            <Tab
              value="recruiter"
              label="RECRUITER"
              sx={{
                fontFamily: "var(--inter-font)",
                fontWeight: "500",
                borderBottom: "2px solid #BDBDBD",
                padding: "0px",
                marginLeft: "16px",
              }}
            />
          </Tabs>

          {/* -------------------------Stepper------------------ */}
          <StepperStyle activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              // if (isStepOptional(index)) {
              //   labelProps.optional = (
              //     <Typography variant="caption">Optional</Typography>
              //   );
              // }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label}>
                  <StepLabel>
                    {activeStep === 0 && (
                      <Typography
                        variant="overline"
                        component="p"
                        color="warining"
                      >
                        {index === 0 ? "IN PROGRESS" : "PENDING"}
                      </Typography>
                    )}
                    {activeStep === 1 && (
                      <Typography
                        variant="overline"
                        component="p"
                        color="warining"
                      >
                        {index === 0
                          ? "DONE!"
                          : index === 2
                          ? "IN PROGRESS"
                          : "PENDING"}
                      </Typography>
                    )}
                    {activeStep === 2 && (
                      <Typography
                        variant="overline"
                        component="p"
                        color="warining"
                      >
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
                  <TextFieldStyle
                    defaultValue=""
                    label=""
                    color="primary"
                    placeholder="some.user@mail.com"
                    focused
                    inputProps={{ style: { padding: 8 } }}
                  />
                  <InputLabelStyle>PASSWORD</InputLabelStyle>
                  <TextFieldStyle
                    defaultValue=""
                    label=""
                    color="primary"
                    placeholder="******"
                    focused
                    inputProps={{ style: { padding: 8 } }}
                  />
                  <InputLabelStyle>PASSWORD CONFIRMATION</InputLabelStyle>
                  <TextFieldStyle
                    defaultValue=""
                    label=""
                    color="primary"
                    placeholder="******"
                    focused
                    inputProps={{ style: { padding: 8 } }}
                  />
                  <Stack display="flex" alignItems="center">
                    <ButtonStyle
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      endIcon={<ArrowForwardIos />}
                    >
                      Next
                    </ButtonStyle>
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
                  <InputLabelStyle>NAME</InputLabelStyle>
                  <TextFieldStyle
                    defaultValue=""
                    label=""
                    color="primary"
                    placeholder="John Doe"
                    focused
                    inputProps={{ style: { padding: 8 } }}
                  />
                  <InputLabelStyle>PHONE</InputLabelStyle>
                  <TextFieldStyle
                    defaultValue=""
                    label=""
                    color="primary"
                    placeholder="+xxxxxxxxx"
                    focused
                    inputProps={{ style: { padding: 8 } }}
                  />
                  <InputLabelStyle>BIRTHDAY</InputLabelStyle>
                  <TextFieldStyle
                    defaultValue=""
                    label=""
                    color="primary"
                    placeholder="Pick a date"
                    focused
                    inputProps={{ style: { padding: 8 } }}
                  />
                  <InputLabelStyle>LINKEDIN URL</InputLabelStyle>
                  <TextFieldStyle
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
                    <OutlineButtonStyle
                      variant="outlined"
                      color="primary"
                      onClick={handleSkip}
                    >
                      SKIP THIS!
                    </OutlineButtonStyle>
                    <ButtonStyle
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      endIcon={<ArrowForwardIos />}
                    >
                      Next
                    </ButtonStyle>
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
                <TextFieldStyle
                  defaultValue=""
                  label=""
                  color="primary"
                  placeholder="Mechanical administrator..."
                  focused
                  inputProps={{ style: { padding: 8 } }}
                />
                <InputLabelStyle>PROFESSIONAL EXPERIENCE</InputLabelStyle>
                <MultilineTextFieldStyle
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
                <MultilineTextFieldStyle
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

                <Typography
                  component="span"
                  variant="body2"
                  color="secondary.main"
                >
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
                  <ButtonStyle
                    startIcon={<ArrowBackIosNew />}
                    variant="contained"
                    color="primary"
                    onClick={handleBack}
                  >
                    PREVIUS
                  </ButtonStyle>
                  <OutlineButtonStyle
                    onClick={handleNext}
                    variant="outlined"
                    color="primary"
                  >
                    SKIP THIS!
                  </OutlineButtonStyle>
                  <ButtonStyle
                    endIcon={<ArrowForwardIos />}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    FINISH
                  </ButtonStyle>
                </Stack>
              </Box>
            </Box>
          )}
          {/* {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Step {activeStep + 1}
                <TextFieldStyle2
                  label=""
                  color="primary"
                  placeholder="some.user@mail.com"
                  focused
                  inputProps={{ style: { padding: 8 } }}
                />
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )} */}
          {/* Form */}
          {/*---------- Form1 ------------*/}
          {/* <Box
            marginTop="36px"
            component="form"
            sx={{ width: "360px" }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <InputLabelStyle>EMAIL</InputLabelStyle>
              <TextFieldStyle
                value=""
                label=""
                color="primary"
                placeholder="some.user@mail.com"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <InputLabelStyle>PASSWORD</InputLabelStyle>
              <TextFieldStyle
                value=""
                label=""
                color="primary"
                placeholder="******"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <InputLabelStyle>PASSWORD CONFIRMATION</InputLabelStyle>
              <TextFieldStyle
                value=""
                label=""
                color="primary"
                placeholder="******"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <Stack display="flex" alignItems="center">
                <ButtonStyle variant="contained" color="primary">
                  Next >
                </ButtonStyle>
              </Stack>
            </Box>
          </Box> */}
          {/*---------- Form2 ------------*/}
          {/* <Box
            marginTop="36px"
            component="form"
            sx={{ width: "360px" }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <InputLabelStyle>NAME</InputLabelStyle>
              <TextFieldStyle
                value=""
                label=""
                color="primary"
                placeholder="John Doe"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <InputLabelStyle>PHONE</InputLabelStyle>
              <TextFieldStyle
                value=""
                label=""
                color="primary"
                placeholder="+xxxxxxxxx"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <InputLabelStyle>BIRTHDAY</InputLabelStyle>
              <TextFieldStyle
                value=""
                label=""
                color="primary"
                placeholder="Pick a date"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <InputLabelStyle>LINKEDIN URL</InputLabelStyle>
              <TextFieldStyle
                value=""
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
                <OutlineButtonStyle variant="outlined" color="primary">
                  SKIP THIS!
                </OutlineButtonStyle>
                <ButtonStyle variant="contained" color="primary">
                  Next >
                </ButtonStyle>
              </Stack>
            </Box>
          </Box> */}
          {/*---------- Form3 ------------*/}
          {/* <Box
            marginTop="36px"
            component="form"
            sx={{ width: "360px" }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <InputLabelStyle>TITLE</InputLabelStyle>
              <TextFieldStyle
                defaultValue=""
                label=""
                color="primary"
                placeholder="Mechanical administrator..."
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <InputLabelStyle>PROFESSIONAL EXPERIENCE</InputLabelStyle>
              <MultilineTextFieldStyle
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
              <MultilineTextFieldStyle
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

              <Typography
                component="span"
                variant="body2"
                color="secondary.main"
              >
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
                <OutlineButtonStyle variant="outlined" color="primary">
                  SKIP THIS!
                </OutlineButtonStyle>
                <ButtonStyle variant="contained" color="primary">
                  Next >
                </ButtonStyle>
              </Stack>
            </Box>
          </Box> */}
        </Box>
        <Box flex={1}>
          <ImageListItem sx={{ position: "fixed", bottom: "0px" }}>
            <img src="images/discussing.svg" alt="woman" />
          </ImageListItem>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Auth;
