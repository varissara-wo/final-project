import React from "react";
import Form from "./Form.jsx";
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

const ButtonStyle = styled(Button)(() => ({
  fontFamily: "var( --inter-font)",
  fontWeight: "500",
  fontSize: "14px",
  borderRadius: "16px",
  padding: "8px 16px",
}));

const TextFieldStyle = styled(TextField)(() => ({
  width: "350px",
  Height: "36px",
  marginBottom: "16px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "8px",
    },
  },
}));

const InputLabelStyle = styled(InputLabel)(() => ({
  fontFamily: "var( --inter-font)",
  fontSize: "12px",
  color: "#373737",
  fontWeight: "400",
  marginBottom: "3px",
}));

const Auth = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack width="100%" alignItems="center">
      <Stack
        direction="row"
        padding="32px"
        width="100%"
        height="100%"
        maxWidth="1440px"
        maxHeight="900px"
        justifyContent="center"
      >
        <Box flex={1} p={10}>
          <Typography variant="h3" marginBottom="16px" color="warning">
            Good choice!
          </Typography>
          <Typography variant="h6" marginBottom="32px" color="warining">
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
              value="one"
              label="PROFESSIONAL"
              sx={{
                fontFamily: "var(--inter-font)",
                fontWeight: "500",
                borderBottom: "2px solid #BDBDBD",
                padding: "0px",
              }}
            />
            <Tab
              value="two"
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
          {/* Form */}
          <Box
            marginTop="36px"
            component="form"
            sx={{ width: "360px" }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <Form />
            </Box>
            <Box>
              <InputLabelStyle>EMAIL</InputLabelStyle>
              <TextFieldStyle
                label=""
                color="primary"
                placeholder="some.user@mail.com"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
              <InputLabelStyle>EMAIL</InputLabelStyle>
              <TextFieldStyle
                label=""
                color="primary"
                placeholder="some.user@mail.com"
                focused
                inputProps={{ style: { padding: 8 } }}
              />
            </Box>
          </Box>
        </Box>
        <Box flex={1}>
          <ImageListItem sx={{ position: "absolute", bottom: "0px" }}>
            <img src="images/discussing.svg" alt="woman" />
          </ImageListItem>
        </Box>
      </Stack>
    </Stack>
  );
};

{
  /* <ButtonStyle variant="contained" color="primary">
            Next >
          </ButtonStyle> */
}

export default Auth;
