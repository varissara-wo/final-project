import React from "react";
import { Button, Typography } from "@mui/material";
import usePosts from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
export const SendButton = (props) => {
  const { Apply } = usePosts();
  const navigate = useNavigate();
  const { jobId, onClick } = props;

  // const handlerApply = (jobId) => {
  //   navigate(`/applications`);
  // };

  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        width: "220px",
        height: "55px",
        backgroundColor: "#F48FB1",
        borderRadius: "16px",
        marginLeft: "300px",
        marginTop: "20px",
      }}
    >
      <MailOutlineIcon sx={{ marginRight: "10px", color: "#FFFFFF" }} />
      <Typography variant="button" color={"primary.contrastText"}>
        Send Application
      </Typography>
    </Button>
  );
};
