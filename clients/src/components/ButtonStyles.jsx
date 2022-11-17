import { styled, Button, Typography, Stack } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";

export const ApplyNowButton = (props) => {
  return (
    <Button
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
