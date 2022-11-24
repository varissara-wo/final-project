import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

//วิธีใช้ 1.import { ReviewStatus } from "../ReviewStatus";
//2. <ReviewStatus status={ status ของ applications} declinedDate={ declined date }/>

export const ReviewStatus = (props) => {
  const { status, declinedDate } = props;
  const OuterStackFlex = styled(Stack)(() => ({
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
  }));
  const InnerStackFlex = styled(Stack)(() => ({
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
  }));

  let declined_date = new Date(declinedDate);
  const declined_day = declined_date.getDate();
  const declined_month = declined_date.getMonth() + 1;
  const declined_year = declined_date.getFullYear();
  declined_date = `${declined_day}/${declined_month}/${declined_year}`;

  if (status === "Waiting") {
    return (
      <OuterStackFlex
        spacing={0}
        sx={{ marginLeft: "10px", marginRight: "10px" }}
        color="secondary"
      >
        <InnerStackFlex spacing={0.2} color="secondary">
          <PauseCircleOutlineOutlinedIcon color="primary" />
        </InnerStackFlex>
        <Typography
          variant="caption"
          color="primary"
          sx={{ maxWidth: "80px", textAlign: "center" }}
        >
          Waiting for review
        </Typography>
      </OuterStackFlex>
    );
  }
  if (status === "Reviewing") {
    return (
      <OuterStackFlex sx={{ marginLeft: "10px", marginRight: "10px" }}>
        <MarkEmailReadOutlinedIcon color="primary" />
        <Typography
          variant="caption"
          color="primary"
          sx={{ maxWidth: "80px", textAlign: "center" }}
        >
          Review in progress
        </Typography>
      </OuterStackFlex>
    );
  }
  if (status === "Finished") {
    return (
      <OuterStackFlex sx={{ marginLeft: "10px", marginRight: "10px" }}>
        <Stack>
          <MarkChatReadOutlinedIcon color="primary" />
        </Stack>
        <Typography variant="caption" color="primary">
          Review
        </Typography>
        <Typography variant="caption" color="primary">
          finished
        </Typography>
      </OuterStackFlex>
    );
  }
  if (status === "Declined") {
    return (
      <OuterStackFlex sx={{ marginLeft: "10px", marginRight: "10px" }}>
        <Stack>
          <HighlightOffIcon color="primary" />
        </Stack>
        <Typography variant="caption" color="primary">
          Declined on
        </Typography>
        <Typography variant="caption" color="primary">
          {declined_date}
        </Typography>
      </OuterStackFlex>
    );
  }
};
