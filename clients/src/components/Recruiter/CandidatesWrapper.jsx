import {
  Accordion,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import usePosts from "../../hooks/usePost";
import { useAuth } from "../../contexts/authentication";
import { SentStatus } from "../SentStatus";
import { ReviewStatus } from "../ReviewStatus";

export default function CandidatesWrapper(props) {
  const {
    applicationId,
    applicationStatus,
    applicationsExperience,
    applicationsUpdatedDate,
    appliedDate,
    cvUrl,
    declinedDate,
    education,
    email,
    interestedDetail,
    jobTitle,
    linkedIn,
    name,
    phone,
    professionalCreatedDate,
    professionalExperience,
    professionalUpdatedDate,
  } = props;
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { getUserData, state, isUserLoading, setIsUserLoading } = useAuth();
  const { closedPost, getPostById, getPostByIdData, isLoading, setIsLoading } =
    usePosts();
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
      expanded={expanded === `panal${applicationId}`}
      onChange={handleChange(`panal${applicationId}`)}
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
            <LinkedInIcon sx={{ marginRight: "6px" }} />
            <Typography variant="subtitle2">{jobTitle}</Typography>
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
              <LocalPhoneIcon sx={{ marginRight: "6px", marginLeft: "10px" }} />
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
          <SentStatus applyDate={appliedDate} />
          {applicationStatus === "Declined" && (
            <ReviewStatus
              status={applicationStatus}
              declinedDate={declinedDate}
            />
          )}
          {applicationStatus !== "Declined" && (
            <ReviewStatus status={applicationStatus} />
          )}
        </Stack>
        {/*------------------------------ Column 4 ------------------------------*/}
        <Stack height="auto" color="info.main" margin="10px 0 0 20px">
          <CloseButton
            variant="contained"
            color="background"
            onClick={() => closedPost("content.job_id")}
          >
            Mark as started
          </CloseButton>
        </Stack>
      </AccordionSummaryStyled>
      <Stack margin="0 10px 10px 10px ">
        <Typography variant="caption">
          LAST UPDATE ON {"content.updated"}
        </Typography>
        <Typography variant="subtitle1" color="error.main">
          Professional experience
        </Typography>
        <Typography variant="body2">{"content.experience"}</Typography>
        <Typography variant="subtitle1" color="error.main">
          Why are you interested in working at The company name SA
        </Typography>
        <Typography variant="body2">{"content.experience"}</Typography>
      </Stack>
    </Accordion>
  );
}
