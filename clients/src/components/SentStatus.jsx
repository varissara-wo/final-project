import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import styled from "@emotion/styled";

//วิธีใช้ 1.import { SentStatus } from "../SentStatus";
//2. <SentStatus applyDate={วันที่} />

// /(1000 * 60 * 60 * 24) แปลง ms เป็น day
// 600000 ms = 1 min
// 3600000 ms = 60 min or 1 hr
//86400000 ms = 24 hr or 1 day
//2628000000 ms = 1 month

export const SentStatus = (props) => {
  const { applyDate } = props;
  const apply_date = new Date(applyDate);
  const today = new Date();
  const time = today.getTime() - apply_date.getTime(); // unit is milliseconds(ms)

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

  //ถ้าน้อยกว่า 60 min ภายใน 1 hr
  if (time < 3600000) {
    console.log("ภายใน 60 min");
    return (
      <OuterStackFlex
        spacing={0}
        sx={{ marginLeft: "10px", marginRight: "10px" }}
        color="secondary"
      >
        <InnerStackFlex spacing={0.2} color="secondary">
          <EmailOutlinedIcon color="secondary" />
        </InnerStackFlex>
        <Typography variant="caption" color="secondary">
          Sent {(time / 60000).toFixed(0)} min
        </Typography>
        <Typography variant="caption" color="secondary">
          ago
        </Typography>
      </OuterStackFlex>
    );
  }
  //ถ้ามากกว่า 60 min และ น้อยกว่า 24 hr หรือ ภายใน 24 hr
  if (time >= 3600000 && time < 86400000) {
    console.log("ภายใน 24 hr");
    return (
      <OuterStackFlex
        spacing={0}
        sx={{ marginLeft: "10px", marginRight: "10px" }}
        color="secondary"
      >
        <InnerStackFlex spacing={0.2} color="secondary">
          <EmailOutlinedIcon color="secondary" />
        </InnerStackFlex>
        <Typography variant="caption" color="secondary">
          Sent {(time / 3600000).toFixed(0)} hours
        </Typography>
        <Typography variant="caption" color="secondary">
          ago
        </Typography>
      </OuterStackFlex>
    );
  }
  //ถ้ามากกว่า 24 hr หรือ มากกว่า 1 day และ น้อยกว่า 30 days
  if (time >= 86400000 && time < 2628000000) {
    console.log("ภายใน 30 days");
    return (
      <OuterStackFlex
        spacing={0}
        sx={{ marginLeft: "10px", marginRight: "10px" }}
        color="secondary"
      >
        <InnerStackFlex spacing={0.2} color="secondary">
          <EmailOutlinedIcon color="secondary" />
        </InnerStackFlex>
        {time > 1 && time < 2 && (
          <Typography variant="caption" color="secondary">
            Sent {(time / 86400000).toFixed(0)} day
          </Typography>
        )}
        {time >= 2 && (
          <Typography variant="caption" color="secondary">
            Sent {(time / 86400000).toFixed(0)} days
          </Typography>
        )}
        <Typography variant="caption" color="secondary">
          ago
        </Typography>
      </OuterStackFlex>
    );
  }
  //ถ้ามากกว่า  30 days
  if (time >= 2628000000) {
    console.log("มากกว่า  30 days");
    return (
      <OuterStackFlex
        spacing={0}
        sx={{ marginLeft: "10px", marginRight: "10px" }}
        color="secondary"
      >
        <InnerStackFlex spacing={0.2} color="secondary">
          <EmailOutlinedIcon color="secondary" />
        </InnerStackFlex>
        <Typography variant="caption" color="secondary">
          Sent on {apply_date}
        </Typography>
      </OuterStackFlex>
    );
  }
};
