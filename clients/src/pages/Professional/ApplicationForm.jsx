import React from "react";
import ProfessionalSidebar from "../../components/Professional/ProfessionalSidebar";
import Box from "@mui/material/Box";
import ApplyJob from "../../components/Professional/ApplyJob";

const ApplicationForm = () => {
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
      <ProfessionalSidebar selectedIndex="1" />
      <ApplyJob />
    </Box>
  );
};

export default ApplicationForm;
