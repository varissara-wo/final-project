import React, { useState } from "react";
import { ImageListItem, Box, Typography, Button } from "@mui/material";
import { MonetizationOn, CalendarMonth, GpsFixed } from "@mui/icons-material/";
import { iconCategory, calSalary } from "../../utils/utilsFunction.js";
import { useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePost.jsx";
import { useEffect } from "react";

const JobWrapper = (props) => {
  const {
    key,
    img,
    category,
    type,
    name,
    minSalary,
    maxSalary,
    jobTitle,
    jobId,
    isFollow,
    handlerFollow,
  } = props;

  const categoryIcon = iconCategory(category);
  const navigate = useNavigate();
  const isFollowMessage = isFollow ? "FOLLOWING" : "FOLLOW";

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "background.paper",
          width: "290px",
          height: "170px",
          borderRadius: "8px",
          boxShadow: "0px 2px 2px #00000033",
          key: { key },
          margin: "14px",
          paddingBottom: "14px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <ImageListItem
            sx={{
              width: "75px",
              height: "75px",
              marginTop: "18px",
              marginLeft: "12px",
            }}
          >
            <img src={img} alt="companyLogo" />
          </ImageListItem>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "12px",
            }}
          >
            <Box
              sx={{
                width: "100px",
                height: "15px",
                marginBottom: "2px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              {categoryIcon}
              <Typography
                variant="caption"
                sx={{
                  marginTop: "5px",
                }}
                color="#8E8E8E"
              >
                {category}
              </Typography>
            </Box>
            {/*------------------------------------- title -------------------------------------*/}
            <Box sx={{ width: "100%", height: "28px" }} className="title">
              <Typography variant="h6" sx={{ fontSize: "17px" }}>
                {jobTitle}
              </Typography>
            </Box>
            <Box sx={{ width: "170px", height: "28px" }}>
              <Typography variant="subtitle2" color="#8E8E8E">
                {name}
              </Typography>
            </Box>
            {/*------------------------------------- Type -------------------------------------*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                width: "250px",
                height: "20px",
                marginBottom: "10px",
              }}
            >
              <Box>
                <CalendarMonth
                  color="info"
                  sx={{
                    marginRight: "5.25px",
                    width: "18px",
                    height: "18px",
                  }}
                />
              </Box>
              <Box sx={{ marginBottom: "5px", marginRight: "16px" }}>
                <Typography variant="caption" color="#8E8E8E">
                  {type}
                </Typography>
              </Box>
              <Box>
                <MonetizationOn
                  color="info"
                  sx={{
                    marginRight: "5.25px",
                    width: "18px",
                    height: "18px",
                  }}
                />
              </Box>
              <Box>
                <Typography variant="caption" color="#8E8E8E">
                  {`${calSalary(minSalary)}k - ${calSalary(maxSalary)}k`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Button
            onClick={() => {
              handlerFollow(jobId);
            }}
          >
            <GpsFixed
              sx={{
                color: isFollow ? "#fff" : "#616161",
                marginRight: "10px",
                padding: "9px",
                backgroundColor: isFollow ? "#F48FB1" : "#fff",
                borderRadius: "50px",
              }}
              color="info"
            />
            <Typography
              variant="button"
              sx={{
                color: "#616161",
                display: "flex",
                whiteSpace: "nowrap",
                width: "87px",
              }}
            >
              {isFollowMessage}
            </Typography>
          </Button>

          <Box sx={{ marginLeft: "10px" }}>
            <Button
              variant="outlined"
              sx={{ borderRadius: "13px" }}
              onClick={() => {
                navigate(`/findjobs/${jobId}`);
              }}
            >
              <Typography variant="button" sx={{ color: "#616161" }}>
                see more
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default JobWrapper;
