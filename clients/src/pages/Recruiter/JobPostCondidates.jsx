import React from "react";
import Box from "@mui/material/Box";
import RecruiterSidebar from "../../components/Recruiter/RecruiterSidebar";
import { ShowJobPostings } from "../../components/Recruiter/ShowJobPosting";

const JobPostCondidates = () => {
  return (
    <Box
      className="findjobs-container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <RecruiterSidebar selectedIndex="0" />
      <ShowJobPostings />
    </Box>
  );
};

export default JobPostCondidates;
