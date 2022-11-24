import { useEffect, useState } from "react";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { DownloadCvButton, DeclineApplicaciontButton } from "./styles";

import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useAuth } from "../../contexts/professionalAuth";
import usePosts from "../../hooks/usePost";
import { CategoryIcon } from "../CategoryIcon";
import { SentStatus } from "../SentStatus";
import { ReviewStatus } from "../ReviewStatus";
import { PostedStatus } from "../PostedStatus";
import { Link } from "react-router-dom";

export function YourApplications() {
  const [expanded, setExpanded] = useState(false);
  const { state } = useAuth();
  const {
    getJobApplications,
    jobApplicationsData,
    isLoading,
    declineApplication,
  } = usePosts();

  // console.log(state);
  const user_email = state.user.id;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //Handle filter applications
  const [selectedFilterApplicationStatus, setSelectedFilterApplicationStatus] =
    useState("All");
  const handleFilterApplications = (event) => {
    setSelectedFilterApplicationStatus(event.target.value);
    setExpanded(false);
  };

  //Handle Decline Applications
  const handleDeclineApplications = (applicationId) => {
    declineApplication(applicationId);
  };

  useEffect(() => {
    setTimeout(() => {
      getJobApplications(user_email, selectedFilterApplicationStatus);
    }, 150);
  }, [isLoading, selectedFilterApplicationStatus]);

  const CheckBoxTextStyled = styled(FormControlLabel)(() => ({
    color: "#616161",
    "& .css-1wmf7zz-MuiTypography-root": { fontWeight: 400, fontSize: "14px" },
    "& .css-1482m0e-MuiButtonBase-root-MuiRadio-root": {
      color: "#F48FB1",
    },
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
  }));

  const AccordionStyled = styled(Accordion)(() => ({
    "&.MuiAccordion-root": {
      borderRadius: "8px",
      border: "1px solid #E1E2E1",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
    },
  }));

  const AccordionSummaryStyled = styled(AccordionSummary)(() => ({
    "& .css-o4b71y-MuiAccordionSummary-content": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }));

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F6",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        minWidth: "100vh",
        marginLeft: "240px",
        paddingBottom: "50px",
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
        {/*------------------------------ Head------------------------------*/}
        <Typography
          variant="h4"
          sx={{ marginTop: "24px", marginBottom: "16px", fontWeight: "400" }}
        >
          Job Postngs
        </Typography>
        {/*------------------------------ Start Filter Jobs ------------------------------*/}
        <FormControl>
          <Typography variant="overline" sx={{ height: "15px" }}>
            FILTER YOUR JOB POSTINGS
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <CheckBoxTextStyled
              value="All"
              control={<Radio />}
              label="All"
              onChange={handleFilterApplications}
            />
            <CheckBoxTextStyled
              value="Waiting"
              control={<Radio />}
              label="Waiting"
              onChange={handleFilterApplications}
            />
            <CheckBoxTextStyled
              value="Reviewing"
              control={<Radio />}
              label="In progress"
              onChange={handleFilterApplications}
            />
            <CheckBoxTextStyled
              value="Finished"
              control={<Radio />}
              label="Finished"
              onChange={handleFilterApplications}
            />
            <CheckBoxTextStyled
              value="Declined"
              control={<Radio />}
              label="Declined"
              onChange={handleFilterApplications}
            />
          </RadioGroup>
        </FormControl>

        <Typography
          variant="h5"
          sx={{
            marginTop: "18px",
            marginBottom: "8px",
            fontWeight: "500",
            color: "#373737",
          }}
        >
          {jobApplicationsData.length} applications found
        </Typography>

        {/*------------------------------ Start information------------------------------*/}
        {isLoading === true && (
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#F5F5F6",
              width: "100%",
              height: "100%",
            }}
          >
            <CircularProgress disableShrink />
          </Stack>
        )}
        {isLoading === false &&
          jobApplicationsData.map((applications) => {
            const applicationId = applications.job_application_id;
            const application_status = applications.application_status;

            return (
              <AccordionStyled
                expanded={expanded === `panel${applicationId}`}
                onChange={handleChange(`panel${applicationId}`)}
                sx={{ marginBottom: "16px", width: "945px" }}
              >
                <AccordionSummaryStyled
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${applicationId}bh-content`}
                  id={`panel${applicationId}bh-header`}
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={0}
                  >
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={0}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                        },
                      }}
                    >
                      <Stack sx={{ width: "60px", height: "60px" }}>
                        <img
                          alt="logo"
                          src={applications.logo_url}
                          width="100%"
                          height="100%"
                        />
                      </Stack>
                      <Stack sx={{ marginLeft: "18px" }}>
                        <Typography variant="h6" sx={{}}>
                          {applications.job_title}
                        </Typography>
                        <Typography variant="subtitle2" color="secondary">
                          {applications.company_name}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={0}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                      },
                    }}
                  >
                    <Typography variant="caption" color="info.main" sx={{}}>
                      <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={0}
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 20,
                          },
                        }}
                      >
                        <CategoryIcon categoryName={applications.name} />
                        {applications.name}
                        <DateRangeOutlinedIcon
                          sx={{ marginRight: "6px", marginLeft: "10px" }}
                        />
                        {applications.type}
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={0}
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 20,
                          },
                        }}
                      >
                        <MonetizationOnOutlinedIcon
                          sx={{ marginRight: "6px" }}
                        />
                        {applications.min_salary / 1000}k-
                        {applications.max_salary / 1000}k
                        <PostedStatus
                          postDate={applications.jobs_created_at}
                          letter={"lowercase"}
                        />
                      </Stack>
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                  >
                    <SentStatus applyDate={applications.applied_at} />
                    <ReviewStatus
                      status={applications.application_status}
                      declinedDate={applications.declined_at}
                    />
                  </Stack>
                </AccordionSummaryStyled>
                <AccordionDetails sx={{ paddingBottom: "0", paddingTop: "0" }}>
                  <Typography variant="overline" color="secondary">
                    Last Updated on{" "}
                    {applications.application_updated_at.slice(0, 10)}
                  </Typography>
                </AccordionDetails>
                <AccordionDetails>
                  <Typography variant="subtitle1" color="error.main">
                    Professional experience
                  </Typography>
                  <Typography variant="body2">
                    {applications.experience}
                  </Typography>
                </AccordionDetails>

                <AccordionDetails>
                  <Typography variant="subtitle1" color="error.main">
                    Why are you interested in working at{" "}
                    {applications.company_name}
                  </Typography>
                  <Typography variant="body2">
                    {applications.interested_detail}
                  </Typography>
                </AccordionDetails>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0 16px 16px 16px",
                  }}
                >
                  <DownloadCvButton
                    startIcon={<FileDownloadOutlinedIcon color="secondary" />}
                    href={applications.cv_url}
                    download={applications.professional_name}
                    target="_blank"
                    rel="noopener"
                  >
                    Download CV
                  </DownloadCvButton>

                  {application_status === "Declined" && (
                    <DeclineApplicaciontButton
                      variant="contained"
                      color="error"
                      startIcon={<HighlightOffOutlinedIcon />}
                      sx={{ marginLeft: "16px" }}
                      onClick={() => {
                        handleDeclineApplications(
                          applications.job_application_id
                        );
                      }}
                      disabled
                    >
                      <Typography variant="button">
                        decline applicacion
                      </Typography>
                    </DeclineApplicaciontButton>
                  )}
                  {application_status !== "Declined" && (
                    <DeclineApplicaciontButton
                      variant="contained"
                      color="error"
                      startIcon={<HighlightOffOutlinedIcon />}
                      sx={{ marginLeft: "16px" }}
                      onClick={() => {
                        handleDeclineApplications(
                          applications.job_application_id
                        );
                      }}
                    >
                      <Typography variant="button">
                        decline applicacion
                      </Typography>
                    </DeclineApplicaciontButton>
                  )}
                </Stack>
              </AccordionStyled>
            );
          })}

        {/*------------------------------ End information------------------------------*/}
      </Box>
    </Box>
  );
}
