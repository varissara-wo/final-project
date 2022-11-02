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

import { FileUploadOutlined } from "@mui/icons-material";

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

const Auth = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                <OutlineButtonStyle variant="outlined" color="primary">
                  SKIP THIS!
                </OutlineButtonStyle>
                <ButtonStyle variant="contained" color="primary">
                  Next >
                </ButtonStyle>
              </Stack>
            </Box>
          </Box>
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
