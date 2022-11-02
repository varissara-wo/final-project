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
} from "@mui/material";

const Auth = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  return (
    <Stack direction="row">
      <Box flex={1} p={10}>
        <Typography variant="h3">Good choice!</Typography>
        <Typography variant="h6">Create a new account as...</Typography>
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
      </Box>
      <Box flex={1}></Box>
    </Stack>
  );
};

export default Auth;
