import React from "react";
import ProfessionalSidebar from "../../components/Professional/ProfessionalSidebar.jsx";
import Box from "@mui/material/Box";
import { Findjobssearch } from "../../components/Professional/FindjobsSearch.jsx";

const FindJobs = () => {
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
      <ProfessionalSidebar selectedIndex="0" />
      <Findjobssearch />
    </Box>
  );
};
export default FindJobs;
