import React from "react";
import { Button, Typography } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { useNavigate } from "react-router-dom";

export const ApplyNowButton = (props) => {
  const navigate = useNavigate();
  const { jobId } = props;

  const handlerApply = (jobId) => {
    console.log(jobId);
    navigate(`/applications/${jobId}`);
  };

  return (
    <Button
      onClick={() => {
        handlerApply(jobId);
      }}
      variant="contained"
      sx={{
        width: "175px",
        height: "55px",
        backgroundColor: "#F48FB1",
        borderRadius: "16px",
      }}
    >
      <NearMeOutlinedIcon
        sx={{ rotate: "270deg", marginRight: "10px", color: "#FFFFFF" }}
      />
      <Typography variant="button" color={"primary.contrastText"}>
        APPLY NOW
      </Typography>
    </Button>
  );
};
