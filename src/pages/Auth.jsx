import React, { useState } from "react";
import Professional from "../components/Authpage/Professional.jsx";
import Recruiter from "../components/Authpage/Recruiter.jsx";
import {
  Stack,
  Typography,
  Box,
  Tabs,
  Tab,
  ImageListItem,
  Paper,
} from "@mui/material";

import Navbar from "../components/Navbar.jsx";

const Auth = () => {
  //   <--------------- user type --------------->

  const [userType, setUserType] = useState("professional");

  const handleChange = (event, newValue) => {
    setUserType(newValue);
  };

  //   <--------------- form type --------------->

  return (
    <Box marginTop="64px" height="100vh" backgroundColor="#E5E5E5">
      <Navbar />
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
          {/* -------------------------Form section------------------ */}
          <Box flex={1} p={5} paddingLeft="188px">
            <Typography variant="h3" marginBottom="16px" color="warning">
              Good choice!
            </Typography>
            <Typography variant="h6" marginBottom="18px" color="warining">
              Create a new account as...
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
          <Box flex={1}>
            <ImageListItem sx={{ position: "fixed", bottom: "0px" }}>
              <img src="images/discussing.svg" alt="woman" />
            </ImageListItem>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Auth;
