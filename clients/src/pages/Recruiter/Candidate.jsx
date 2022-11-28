import React from "react";
import Box from "@mui/material/Box";
import RecruiterSidebar from "../../components/Recruiter/RecruiterSidebar.jsx";
import { ShowJobPostings } from "../../components/Recruiter/ShowJobPosting.jsx";
const Candidate = () => {
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
      <RecruiterSidebar selectedIndex="1" />
      <ShowJobPostings />
    </Box>
  );
};

export default Candidate;
