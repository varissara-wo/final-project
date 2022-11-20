import React from "react";
import Box from "@mui/material/Box";
import ProfessionalSidebar from "../../components/Professional/ProfessionalSidebar.jsx";
import UpdateProfessionalProfile from "../../components/Professional/UpdateProfessionalProfile.jsx";

const ProfessionalProfile = () => {
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
      <ProfessionalSidebar selectedIndex="3" />
      <UpdateProfessionalProfile />
    </Box>
  );
};

export default ProfessionalProfile;
