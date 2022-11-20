import React from "react";
import Box from "@mui/material/Box";
import ProfessionalSidebar from "../../components/Professional/ProfessionalSidebar.jsx";
import UserFollowing from "../../components/Professional/UserFollowing.jsx";

const Following = () => {
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
      <ProfessionalSidebar selectedIndex="2" />
      <UserFollowing />
    </Box>
  );
};

export default Following;
