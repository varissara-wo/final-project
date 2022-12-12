import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { CandidatesOnTrack, OpenOn, TotalCandidates } from "../Status";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import { iconCategory } from "../../utils/utilsFunction";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "../../contexts/authentication";
import { useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePost";

export default function JobPostWrapper(props) {
  const navigate = useNavigate();
  const { getUserData, state, isUserLoading, setIsUserLoading } = useAuth();
  const { closedPost, getPostById, getPostByIdData, isLoading, setIsLoading } =
    usePosts();

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const {
    jobTitle,
    jobCategory,
    jobType,
    minSalary,
    maxSalary,
    openDate,
    totalCandidates,
    candidatesOnTrack,
    closeDate,
    jobId,
    recruiterStatus,
    aboutJobPosition,
    jobRequirement,
    optionRequirement,
    categoryId,
  } = props;
  console.log(jobId);
  const calSalary = (num) => {
    let a = num / 1000;
    return Math.floor(a);
  };

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

  return (
    <Accordion
      expanded={expanded === "panal1"}
      onChange={handleChange("panal1")}
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
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          width="315px"
          spacing={0}
        >
          <Typography variant="h6">{jobTitle}</Typography>
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
              {iconCategory(jobCategory)}

              {jobCategory}

              <DateRangeOutlinedIcon
                sx={{ marginRight: "6px", marginLeft: "10px" }}
              />
              {jobType}
              <MonetizationOnOutlinedIcon
                sx={{ marginRight: "6px", marginLeft: "10px" }}
              />
              {`${calSalary(minSalary)}k-${calSalary(maxSalary)}k`}
            </Stack>
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 20,
            },
          }}
        >
          <OpenOn date={openDate} />
          <TotalCandidates candidates={totalCandidates} />
          <CandidatesOnTrack candidates={candidatesOnTrack} />
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <CloseButton
            variant="button"
            color="secondary.main"
            startIcon={
              <SearchIcon sx={{ width: "35px", height: "35px" }} color="info" />
            }
          >
            SHOW
          </CloseButton>
          {recruiterStatus === "closed" && (
            <CloseButton
              variant="contained"
              color="error"
              startIcon={<HighlightOffIcon />}
              onClick={() => closedPost(jobId)}
              disabled
            >
              CLOSE
            </CloseButton>
          )}
          {recruiterStatus !== "closed" && (
            <CloseButton
              variant="contained"
              color="error"
              startIcon={<HighlightOffIcon />}
              onClick={() => {
                setIsLoading(true);
                closedPost(jobId);
              }}
            >
              CLOSE
            </CloseButton>
          )}
        </Stack>
      </AccordionSummaryStyled>

      <AccordionDetails>
        <Typography variant="subtitle1" color="error.main">
          About the job positions
        </Typography>
        <Typography variant="body2">{aboutJobPosition}</Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography variant="subtitle1" color="error.main">
          Mandatory Requirements
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
          {jobRequirement}
        </Typography>
      </AccordionDetails>
      <AccordionDetails>
        <Typography variant="subtitle1" color="error.main">
          Optional Requirements
        </Typography>
        <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
          {optionRequirement}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
