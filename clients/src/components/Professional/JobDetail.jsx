import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Stack } from "@mui/system";
import { ApplyNowButton } from "./ButtonStyles";
import { Following } from "../Status";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import { bigIconCategory } from "../../utils/utilsFunction";

const DisplayStyle = styled(Stack)(() => ({
  border: "1px solid #BF5F82",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
  backgroundColor: "#fff",
  borderRadius: "8px",
  display: "flex",
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 32px 16px 35px",
  marginLeft: "16px",
  marginRight: "16px",
}));

export function JobDetails(props) {
  const {
    aboutCompany,
    aboutJob,
    companyName,
    createdTime,
    jobId,
    requirement,
    optionalRequirement,
    jobTitle,
    companyLogo,
    maxSalary,
    minSalary,
    category,
    jobType,
  } = props;

  const icon = bigIconCategory(category);

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F6",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        minWidth: "100vh",
        marginLeft: "240px",
        paddingBottom: "70px",
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
        <Button
          variant="button"
          href="/findjobs"
          sx={{ padding: "0px", marginBottom: "19px" }}
        >
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
            <Box
              sx={{
                width: "75px",
                height: "75px",
                backgroundColor: "#fff",
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
              }}
            >
              <img alt="logo" src={companyLogo} width="100%" height="auto" />
            </Box>
            <Stack sx={{ marginLeft: "18px" }}>
              <Typography
                variant="h5"
                sx={{
                  marginBottom: "8px",
                  fontWeight: "400",
                }}
              >
                {companyName}
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
          <Typography
            variant="h3"
            sx={{
              marginTop: "18px",
              marginBottom: "9.5px",
            }}
          >
            {jobTitle}
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "17.5px",
            }}
          >
            <AccessTimeOutlinedIcon
              sx={{
                fontSize: 12.5,
                marginBottom: "12px",
                marginRight: "5px",
                color: "#616161",
                display: "flex",
              }}
            />
            <Typography variant="overline" sx={{ display: "flex" }}>
              Posted 2 days ago
            </Typography>
          </Stack>

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
                {icon}
                <Typography variant="h5" fontWeight="400">
                  {category}
                </Typography>
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
                  sx={{ fontSize: 25, marginRight: "12px", color: "#616161" }}
                />
                <Typography variant="h5" fontWeight="400">
                  {jobType}
                </Typography>
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
                  sx={{ fontSize: 25, marginRight: "12px", color: "#616161" }}
                />
                <Typography variant="h5" fontWeight="400">
                  {minSalary} - {maxSalary}
                </Typography>
              </Stack>
            </DisplayStyle>
          </Stack>
        </Stack>
        {/*------------------------------ Job Content ------------------------------*/}
        <Stack width={"90%"} marginTop="70px">
          <Stack marginBottom="16px">
            <Typography variant="h5" color="error" fontWeight="400">
              About The {companyName}
            </Typography>
            <Typography
              variant="body1"
              color="warning.main"
              fontWeight="400"
              marginTop="8px"
              width="85%"
            >
              {aboutCompany}
            </Typography>
          </Stack>
          <Stack marginBottom="16px">
            <Typography variant="h5" color="error" fontWeight="400">
              About the job position
            </Typography>
            <Typography
              variant="body1"
              color="warning.main"
              fontWeight="400"
              marginTop="8px"
              width="85%"
            >
              {aboutJob}
            </Typography>
          </Stack>
          <Stack marginBottom="16px">
            <Typography variant="h5" color="error" fontWeight="400">
              Mandatory Requirements
            </Typography>
            <Typography
              variant="body1"
              color="warning.main"
              sx={{ whiteSpace: "pre-wrap" }}
              fontWeight="400"
              marginTop="8px"
            >
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
          <Stack marginBottom="16px">
            <Typography variant="h5" color="error" fontWeight="400">
              Optional Requirements
            </Typography>
            <Typography
              variant="body1"
              color="warning.main"
              sx={{ whiteSpace: "pre-wrap" }}
              fontWeight="400"
              marginTop="8px"
            >
              {optionalRequirement}
            </Typography>
          </Stack>
        </Stack>
        {/*------------------------------ Job Apply Now ------------------------------*/}
        <Stack direction={"row"} justifyContent="center" width={"90%"}>
          <ApplyNowButton />
        </Stack>
      </Box>
    </Box>
  );
}
