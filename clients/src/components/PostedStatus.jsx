import React from "react";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import styled from "@emotion/styled";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

//วิธีใช้ 1.import { PostedStatus } from "../PostedStatus";
//2. <PostedStatus postDate={วันที่} ,style={ "uppercase" หรือ "lowercase" }/>
// style = {"uppercase", "lowercase"}

// /(1000 * 60 * 60 * 24) แปลง ms เป็น day
// 600000 ms = 1 min
// 3600000 ms = 60 min or 1 hr
//86400000 ms = 24 hr or 1 day
//2628000000 ms = 1 month

export const PostedStatus = (props) => {
  const { postDate, letter } = props;
  let post_date = new Date(postDate);
  const today = new Date();
  const time = today.getTime() - post_date.getTime(); // unit is milliseconds(ms)

  const post_day = post_date.getDate();
  const post_month = post_date.getMonth() + 1;
  const post_year = post_date.getFullYear();
  post_date = `${post_day}/${post_month}/${post_year}`;

  const TypographyFlex = styled(Stack)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }));

  //ถ้าน้อยกว่า 60 min ภายใน 1 hr
  if (time < 3600000) {
    return (
      <Typography variant="caption" color="secondary">
        <AccessTimeOutlinedIcon
          sx={{ marginRight: "6px", marginLeft: "10px" }}
        />
        Posted {(time / 60000).toFixed(0)} min ago
      </Typography>
    );
  }

  //ถ้ามากกว่า 24 hr หรือ มากกว่า 1 hr และ น้อยกว่า 24 hr
  if (time >= 86400000 && time < 2628000000) {
    return (
      <>
        {time > 1 && time < 2 && (
          <Typography variant="caption" color="secondary">
            <AccessTimeOutlinedIcon
              sx={{ marginRight: "6px", marginLeft: "10px" }}
            />
            Posted {(time / 86400000).toFixed(0)} hour ago
          </Typography>
        )}
        {time >= 2 && (
          <TypographyFlex variant="caption" color="secondary">
            <AccessTimeOutlinedIcon
              sx={{ marginRight: "6px", marginLeft: "10px" }}
            />
            Posted {(time / 86400000).toFixed(0)} hours ago
          </TypographyFlex>
        )}
      </>
    );
  }

  //ถ้ามากกว่า 24 hr หรือ มากกว่า 1 day และ น้อยกว่า 30 days
  if (time >= 86400000 && time < 2628000000) {
    return (
      <>
        {time > 1 && time < 2 && (
          <TypographyFlex variant="caption">
            <Typography variant="caption" color="secondary">
              Posted {(time / 86400000).toFixed(0)} day ago
            </Typography>
          </TypographyFlex>
        )}
        {time >= 2 && (
          <TypographyFlex color="secondary">
            <Typography variant="caption">
              Posted {(time / 86400000).toFixed(0)} days ago
            </Typography>
          </TypographyFlex>
        )}
      </>
    );
  }
  //ถ้ามากกว่า  30 days
  if (time >= 2628000000) {
    return (
      <TypographyFlex variant="caption" color="secondary">
        <Typography variant="caption" color="secondary">
          Posted on {post_date}
        </Typography>
      </TypographyFlex>
    );
  }
};
