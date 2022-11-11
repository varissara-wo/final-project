import React, { useState } from "react";
import Professional from "../components/Loginpage/Professional.jsx";
import Recruiter from "../components/Loginpage/Recruiter.jsx";
import {
  Stack,
  Typography,
  Box,
  Tabs,
  Tab,
  ImageListItem,
} from "@mui/material";

import Navbar from "../components/Navbar.jsx";

const Login = () => {
  //   <--------------- user type --------------->

  const [userType, setUserType] = useState("professional");

  const handleChange = (event, newValue) => {
    setUserType(newValue);
  };

  //   <--------------- form type --------------->

  return (
    <Box marginTop="64px" height="100%" backgroundColor="#F5F5F6">
      <Navbar />
      <Stack width="100%" alignItems="center">
        <Stack
          direction="row"
          paddingTop="5%"
          width="100%"
          height="100%"
          maxWidth="1440px"
          // maxHeight="900px"
          justifyContent="center"
        >
          {/* -------------------------Form section------------------ */}
          <Box flex={1} p={5} paddingLeft="188px" height="100%">
            <Typography variant="h3" marginBottom="16px" color="warning">
              Welcome back
            </Typography>
            <Typography variant="h6" marginBottom="18px" color="warining">
              Login to you account as...
            </Typography>
            <Tabs
              color="Pink"
              value={userType}
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

            {/* -------------------------Stepper Professional------------------ */}

            {userType === "professional" && <Professional />}
            {userType === "recruiter" && <Recruiter />}
          </Box>
          <Box flex={1} height="100">
            <ImageListItem sx={{ bottom: "0px", right: "20%" }}>
              <img src="images/login.svg" alt="man" />
            </ImageListItem>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;