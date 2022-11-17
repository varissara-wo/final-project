import { useEffect, useState } from "react";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Stack } from "@mui/system";
import { ApplyNowButton } from "../ButtonStyles";
import { Following } from "../Status";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Sidebar from "../ProfessionalSidebar";
import usePosts from "../../hooks/usePost";
import { json, useParams } from "react-router-dom";

const DisplayStyle = styled(Stack)(() => ({
  border: "1px solid #BF5F82",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
  borderRadius: "8px",
  display: "flex",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 32px 16px 35px",
  marginLeft: "16px",
  marginRight: "16px",
}));

export function SeeMoreJobDetails(props) {
  //const {  } = props;
  const params = useParams();
  const jobId = params.jobId;

  const { getJobById, getJobByIdData } = usePosts();
  console.log(getJobByIdData);
  //const logo = JSON.parse(getJobByIdData.logo_url).url;
  // const option_requirement = getJobByIdData.option_requirement.split("-");
  // option_requirement.shift();
  // for (let i = 0; i < option_requirement.length; i++) {
  //   option_requirement[i] = "- " + option_requirement[i];
  // }

  useEffect(() => {
    getJobById(jobId);
  }, []);

  return (
    <Box
      className="seemore-container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      {/*------------------------------ Start Side bar ------------------------------*/}
      <Sidebar selectedInit={0} />
      {/*------------------------------ Start Side bar ------------------------------*/}
      {/*------------------------------ Start See More Job Details ------------------------------*/}
      <Box
        sx={{
          backgroundColor: "#F5F5F6",
          width: "100%",
          height: "100vh",
          minWidth: "100vh",
          marginLeft: "240px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "100px",
            marginTop: "30px",
          }}
        >
          {/*------------------------------ Back ------------------------------*/}
          <Button variant="button" href="/findjobs">
            <ArrowBackIosNewOutlinedIcon fontSize="small" color="secondary" />
            <Typography
              variant="button"
              color="secondary"
              sx={{ marginLeft: "10px" }}
            >
              Back
            </Typography>
          </Button>
          {/*------------------------------ Job Header ------------------------------*/}
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center ",
              width: "90%",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center ",
              }}
            >
              <Box sx={{ width: "75px", height: "75px" }}>
                <img
                  alt="logo"
                  src="{JSON.parse(getJobByIdData.logo_url).url}"
                  width="100%"
                  height="auto"
                />
              </Box>
              <Stack sx={{ marginLeft: "18px" }}>
                <Typography variant="h5" sx={{ marginBottom: "8px" }}>
                  {getJobByIdData.company_name}
                </Typography>
                <Following />
              </Stack>
            </Stack>
            <ApplyNowButton />
          </Stack>
          {/*------------------------------ Job Title ------------------------------*/}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            width={"90%"}
          >
            <Typography variant="h3">{getJobByIdData.job_title}</Typography>
            <Typography
              variant="overline"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccessTimeOutlinedIcon
                sx={{ fontSize: 12.5, marginRight: "5px" }}
              />
              Posted 2 days ago
            </Typography>
            <Stack direction="row" justifyContent="cebter" alignItems="center">
              <DisplayStyle>
                <Typography variant="subtitle1" color="secondary">
                  Category
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="cebter"
                  alignItems="center"
                >
                  <VillaOutlinedIcon
                    sx={{ fontSize: 25, marginRight: "12px" }}
                  />
                  <Typography variant="h5">Manufacturing</Typography>
                </Stack>
              </DisplayStyle>
              <DisplayStyle>
                <Typography variant="subtitle1" color="secondary">
                  Type
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="cebter"
                  alignItems="center"
                >
                  <DateRangeOutlinedIcon
                    sx={{ fontSize: 25, marginRight: "12px" }}
                  />
                  <Typography variant="h5">{getJobByIdData.type}</Typography>
                </Stack>
              </DisplayStyle>
              <DisplayStyle>
                <Typography variant="subtitle1" color="secondary">
                  Salary
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="cebter"
                  alignItems="center"
                >
                  <MonetizationOnOutlinedIcon
                    sx={{ fontSize: 25, marginRight: "12px" }}
                  />
                  <Typography variant="h5">
                    {getJobByIdData.min_salary} - {getJobByIdData.max_salary}
                  </Typography>
                </Stack>
              </DisplayStyle>
            </Stack>
          </Stack>
          {/*------------------------------ Job Content ------------------------------*/}
          <Stack width={"90%"} marginTop="54px">
            <Stack marginBottom="16px">
              <Typography variant="h5" color="error">
                About The {getJobByIdData.company_name}
              </Typography>
              <Typography variant="body1" color="warning.main">
                {getJobByIdData.about_company}
              </Typography>
            </Stack>
            <Stack marginBottom="16px">
              <Typography variant="h5" color="error">
                About the job position
              </Typography>
              <Typography variant="body1" color="warning.main">
                {getJobByIdData.about_job_position}
              </Typography>
            </Stack>
            <Stack marginBottom="16px">
              <Typography variant="h5" color="error">
                Mandatory Requirements
              </Typography>
              <Typography variant="body1" color="warning.main">
                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Stack>
            <Stack marginBottom="16px">
              <Typography variant="h5" color="error">
                Optional Requirements
              </Typography>
              <Typography variant="body1" color="warning.main">
                {getJobByIdData.option_requirement}
              </Typography>
              {/* {option_requirement.map((requirement) => {
                return (
                  <Typography variant="body1" color="warning.main">
                    {requirement}
                  </Typography>
                );
              })} */}
            </Stack>
          </Stack>
          {/*------------------------------ Job Apply Now ------------------------------*/}
          <Stack direction={"row"} justifyContent="center" width={"90%"}>
            <ApplyNowButton />
          </Stack>
        </Box>
      </Box>
      {/*------------------------------ Finish See More Job Details ------------------------------*/}
    </Box>
  );
}
