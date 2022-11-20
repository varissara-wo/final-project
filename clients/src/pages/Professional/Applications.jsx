import React from "react";
import Box from "@mui/material/Box";
import ProfessionalSidebar from "../../components/Professional/ProfessionalSidebar.jsx";
import { YourApplications } from "../../components/Professional/YourApplications.jsx";

const Applications = () => {
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
      <YourApplications />
    </Box>
  );
};

export default Applications;
