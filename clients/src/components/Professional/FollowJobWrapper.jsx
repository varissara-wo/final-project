import React from "react";
import { iconCategory, calSalary } from "../../utils/utilsFunction.js";
import { ImageListItem, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MonetizationOn, CalendarMonth, GpsFixed } from "@mui/icons-material/";

const FollowJobWrapper = (props) => {
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
  } = props;

  const categoryIcon = iconCategory(category);
  const navigate = useNavigate();

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
          margin: "10px",
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
              marginLeft: "15px",
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
          <Button>
            <GpsFixed
              sx={{
                color: "#fff",
                marginRight: "10px",
                backgroundColor: "#F48FB1",
                padding: "9px",
                borderRadius: "50px",
              }}
              color="info"
            />
            <Typography
              variant="button"
              sx={{ color: "#616161", display: "flex" }}
            >
              Follow
            </Typography>
          </Button>

          <Button
            variant="outlined"
            sx={{ borderRadius: "13px", width: "110px", height: "40px" }}
            onClick={() => {
              navigate(`/findjobs/${jobId}`);
            }}
          >
            <Typography
              variant="button"
              sx={{ color: "#616161", width: "100%" }}
            >
              see more
            </Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default FollowJobWrapper;
