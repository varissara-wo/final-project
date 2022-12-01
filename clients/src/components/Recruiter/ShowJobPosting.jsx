import { useState } from "react";
import React from "react";
import usePosts from "../../hooks/usePost";
import { useAuth } from "../../contexts/authentication";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import JobPostWrapper from "./JobPostWrapper";
import { Link, useParams } from "react-router-dom";
import { SentStatus } from "../SentStatus";
import { ReviewStatus } from "../ReviewStatus";
import { DownloadCvButton } from "../Professional/styles";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export function ShowJobPostings() {
  const { getUserData, state, isUserLoading, setIsUserLoading } = useAuth();
  const {
    closedPost,
    getPostById,
    getPostByIdData,
    candidatesData,
    isLoading,
    setIsLoading,
    changeApplicationStatus,
  } = usePosts();
  const params = useParams();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //Handle filter applications
  const [selectedFilterCandidateStatus, setSelectedFilterCandidateStatus] =
    useState("All");
  const handleFilterCandidates = (event) => {
    setSelectedFilterCandidateStatus(event.target.value);
    setExpanded(false);
    setIsLoading(true);
  };

  //Change Application Status
  const handleChangeApplicationStatus = (applicationId, applicationStatus) => {
    changeApplicationStatus(applicationId, applicationStatus);
    setExpanded(false);
    setIsLoading(true);
  };
  const {
    about_job_position,
    closed_at,
    created_at,
    job_id,
    job_requirement,
    job_title,
    max_salary,
    min_salary,
    on_track_candidates,
    option_requirement,
    recruit_status,
    recruiter_id,
    total_candidates,
    type,
    updated_at,
    categories_id,
    name,
  } = getPostByIdData;
  console.log(job_id, job_requirement, job_title, max_salary, min_salary);
  useEffect(() => {
    getUserData();
    const jobId = params.postId;
    getPostById(jobId, selectedFilterCandidateStatus);
  }, [selectedFilterCandidateStatus, isLoading]);

  console.log(getPostByIdData);
  console.log(candidatesData);

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

  const AccordionSummaryStyled = styled(AccordionSummary)(() => ({
    "& .css-o4b71y-MuiAccordionSummary-content": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }));

  const CloseButton = styled(Button)(() => ({
    fontFamily: "var( --inter-font)",
    fontWeight: "500",
    fontSize: "14px",
    borderRadius: "16px",
    padding: "8px 16px",
    width: "auto",
    "& .MuiSvgIcon-root": {
      fontSize: 28,
    },
  }));
  console.log(candidatesData);
  return (
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
        {/*------------------------------ Head------------------------------*/}
        <CloseButton
          variant="button"
          color="secondary.main"
          startIcon={
            <ArrowBackIosIcon
              sx={{ width: "20px", height: "20px" }}
              color="info"
            />
          }
          href="/recruiter/jobpost"
        >
          BACK
        </CloseButton>
        <Typography
          variant="h4"
          sx={{ marginTop: "24px", marginBottom: "16px", fontWeight: "400" }}
        >
          Show Job Posting
        </Typography>
        {/*------------------------------ Start information------------------------------*/}
        {
          <JobPostWrapper
            jobTitle={job_title}
            jobCategory={name}
            jobType={type}
            minSalary={min_salary}
            maxSalary={max_salary}
            openDate={created_at}
            totalCandidates={total_candidates}
            candidatesOnTrack={on_track_candidates}
            closeDate={closed_at}
            jobId={job_id}
            recruiterStatus={recruit_status}
            aboutJobPosition={about_job_position}
            optionRequirement={option_requirement}
            jobRequirement={job_requirement}
            categoryId={categories_id}
          />
        }
        {/*------------------------------ Start Filter Jobs ------------------------------*/}
        <FormControl>
          <Typography variant="overline" sx={{ height: "15px" }}>
            FILTER YOUR CANDIDATES
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
              onChange={handleFilterCandidates}
            />
            <CheckBoxTextStyled
              value="Waiting"
              control={<Radio />}
              label="Waiting"
              onChange={handleFilterCandidates}
            />
            <CheckBoxTextStyled
              value="Reviewing"
              control={<Radio />}
              label="In progress"
              onChange={handleFilterCandidates}
            />
            <CheckBoxTextStyled
              value="Finished"
              control={<Radio />}
              label="Finished"
              onChange={handleFilterCandidates}
            />
          </RadioGroup>
        </FormControl>
        {/*------------------------------ Start Candidates ------------------------------*/}
        <Typography variant="h5" sx={{ marginBottom: "8px" }}>
          {candidatesData.length} candidates found
        </Typography>
        {/*------------------------------ Start Candidates ------------------------------*/}
        {candidatesData.map((candidate, index) => {
          console.log(candidate);
          const {
            application_status,
            applications_experience,
            applications_updated_at,
            applied_at,
            cv_url,
            declined_at,
            education,
            email,
            interested_detail,
            is_upload_cv,
            job_application_id,
            job_id,
            job_title,
            linkedin,
            name,
            phone,
            professional_created_at,
            professional_experience,
            professional_updated_at,
            company_name,
          } = candidate;
          return (
            <Accordion
              expanded={expanded === `panal${job_application_id}`}
              onChange={handleChange(`panal${job_application_id}`)}
              sx={{
                width: "945px",
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
                marginBottom: "16px",
              }}
            >
              <AccordionSummaryStyled
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                {/*------------------------------ Column 1 ------------------------------*/}
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  width="auto"
                  marginRight="20px"
                  spacing={0}
                >
                  <Typography variant="h6">{name}</Typography>

                  <Stack
                    color="info.main"
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
                    <Button
                      href={linkedin}
                      target="_blank"
                      variant="subtitle2"
                      startIcon={<LinkedInIcon />}
                      sx={{ padding: "0", textTransform: "none" }}
                    >
                      <Typography variant="subtitle2">{job_title}</Typography>
                    </Button>
                  </Stack>
                </Stack>
                {/*------------------------------ Column 2 ------------------------------*/}
                <Stack
                  direction="column"
                  justifyContent="center"
                  width="auto"
                  spacing={0}
                  margin="10px 20px 0 0"
                >
                  <Typography variant="caption" color="info.main">
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={0}
                    >
                      <MailOutlineIcon
                        sx={{ marginRight: "6px", marginLeft: "10px" }}
                      />
                      {email}
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={0}
                    >
                      <LocalPhoneIcon
                        sx={{ marginRight: "6px", marginLeft: "10px" }}
                      />
                      {phone}
                    </Stack>
                  </Typography>
                </Stack>
                {/*------------------------------ Column 3 ------------------------------*/}
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0}
                  color="secondary"
                >
                  <SentStatus applyDate={applied_at} />
                  {application_status === "Declined" && (
                    <ReviewStatus
                      status={application_status}
                      declinedDate={declined_at}
                    />
                  )}
                  {application_status !== "Declined" && (
                    <ReviewStatus status={application_status} />
                  )}
                </Stack>
                {/*------------------------------ Column 4 ------------------------------*/}
                <Stack height="auto" color="info.main" margin="10px 0 0 20px">
                  {application_status.toLowerCase() === "waiting" && (
                    <CloseButton
                      variant="contained"
                      color="background"
                      sx={{ border: "1px solid #F48FB1" }}
                      onClick={() => {
                        handleChangeApplicationStatus(
                          job_application_id,
                          "Reviewing"
                        );
                        setIsLoading(true);
                      }}
                    >
                      Mark as Started
                    </CloseButton>
                  )}
                  {application_status.toLowerCase() === "reviewing" && (
                    <CloseButton
                      variant="contained"
                      color="background"
                      sx={{ border: "1px solid #F48FB1" }}
                      onClick={() => {
                        handleChangeApplicationStatus(
                          job_application_id,
                          "Finished"
                        );
                        setIsLoading(true);
                      }}
                    >
                      Mark as Finished
                    </CloseButton>
                  )}
                  {application_status.toLowerCase() === "finished" && (
                    <CloseButton
                      disabled
                      variant="contained"
                      color="background"
                    >
                      Finished
                    </CloseButton>
                  )}
                </Stack>
              </AccordionSummaryStyled>
              <AccordionDetails sx={{ paddingBottom: "0", paddingTop: "0" }}>
                <Typography variant="overline" color="secondary">
                  Last Updated on {applications_updated_at.slice(0, 10)}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography variant="subtitle1" color="error.main">
                  Professional experience
                </Typography>
                <Typography variant="body2">
                  {applications_experience}
                </Typography>
              </AccordionDetails>
              <AccordionDetails>
                <Typography variant="subtitle1" color="error.main">
                  Why are you interested in working at {company_name}
                </Typography>
                <Typography variant="body2">{interested_detail}</Typography>
              </AccordionDetails>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
                padding="0 16px 16px 16px"
              >
                <DownloadCvButton
                  startIcon={<FileDownloadOutlinedIcon color="secondary" />}
                  href={cv_url}
                  download={name}
                  target="_blank"
                  rel="noopener"
                >
                  Download CV
                </DownloadCvButton>
              </Stack>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}
