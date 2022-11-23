import React, { useEffect } from "react";
import ProfessionalSidebar from "../../components/Professional/ProfessionalSidebar";

import Applyjob from "../../components/Professional/ApplyJob.jsx";
import usePosts from "../../hooks/usePost";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Stack } from "@mui/material";
const ApplicationForm = () => {
  const params = useParams();
  const jobId = params.jobid;

  useEffect(() => {}, []);

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

      <Applyjob jobId={jobId} />
    </Box>
  );
};

export default ApplicationForm;
