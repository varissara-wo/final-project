import React from "react";
import Box from "@mui/material/Box";
import RecruiterSidebar from "../../components/Recruiter/RecruiterSidebar.jsx";
import { Jobpostings } from "../../components/Recruiter/Jobpostings.jsx";

export function JobPost() {
  return (
    <Box
      className="findjobs-container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
      height="100vh important!"
    >
      <RecruiterSidebar selectedIndex="0" />
      <Jobpostings />
    </Box>
  );
}
