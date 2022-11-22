import React from "react";
import Box from "@mui/material/Box";
import RecruiterSidebar from "../../components/Recruiter/RecruiterSidebar.jsx";
import Profile from "../../components/Recruiter/Profile.jsx";

const RecruiterProfile = () => {
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
      <RecruiterSidebar selectedIndex="2" />
      <Profile />
    </Box>
  );
};

export default RecruiterProfile;
