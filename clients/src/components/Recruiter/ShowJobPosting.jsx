import { useState, useCallback } from "react";
import React from "react";
import usePosts from "../../hooks/usePost";
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
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { OpenOn, TotalCandidates, CandidatesOnTrack } from "../Status";
import { useEffect } from "react";
import { iconCategory } from "../../utils/utilsFunction";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

export function ShowJobPostings() {
  const [expanded, setExpanded] = useState(false);
  const { data, getPost, numberOfJobs, closedPost, selectPost } = usePosts();
  const [type, setType] = useState("all");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    selectPost(8, type);
  }, [type]);

  console.log(data);
  const handlechoose = (chooseType) => {
    console.log(chooseType);
    setType(chooseType);
    // await selectPost(recruiterId, type);
  };

  const calSalary = (num) => {
    let a = num / 1000;
    return Math.floor(a);
  };

  const date = (d) => {
    d = d.toString();
    const arr = [];
    for (let i = 0; i < d.length; i++) {
      if (d[i] == "T") {
        return arr;
      }
      arr.push(d[i]);
    }
  };
  {
    /*------------------------------------------------debouce---------------------------------------------------------*/
  }

  {
    /*------------------------------------------------debouce---------------------------------------------------------*/
  }

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
  {
    /*------------------------------------------------รอvalue จาก context---------------------------------------------------------*/
  }

  {
    /*------------------------------------------------รอvalue จาก context---------------------------------------------------------*/
  }
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

  const candidatesInputs = [
    {
      name: "Guybrush Threepwood",
      email: "guy.brush@mail.com",
      title: "Mighty Pirate",
      phone: "+333555777",
      experience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula.",
      date: "1",
      updated: "03/10/22",
    },
    {
      name: "Ramón Valdés",
      email: "ramon.valdes@vecindad.com",
      title: "Professional Multiservices",
      phone: "+524831212891",
      experience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula.",
      date: "1",
      updated: "04/11/22",
    },
  ];

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
          backgroundColor: "#F5F5F6",
          width: "100%",
          height: "auto",
          minWidth: "100vh",
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
          >
            BACK
          </CloseButton>
          <Typography
            variant="h4"
            sx={{ marginTop: "24px", marginBottom: "16px", fontWeight: "400" }}
          >
            Show Job Posting
          </Typography>
          <div>
            {/*------------------------------ Start information------------------------------*/}
            {data.map((content, index) => {
              return (
                <>
                  <Accordion
                    expanded={expanded === `panal${index}`}
                    onChange={handleChange(`panal${index}`)}
                    sx={{ marginBottom: "16px", width: "945px" }}
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
                        <Typography variant="h6">
                          {content.job_title}
                        </Typography>
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
                            {iconCategory(content.name)}

                            {content.name}

                            <DateRangeOutlinedIcon
                              sx={{ marginRight: "6px", marginLeft: "10px" }}
                            />
                            {content.type}
                            <MonetizationOnOutlinedIcon
                              sx={{ marginRight: "6px", marginLeft: "10px" }}
                            />
                            {`${calSalary(content.min_salary)}k-${calSalary(
                              content.max_salary
                            )}k`}
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
                        <OpenOn date={date(content.created_at)} />

                        <TotalCandidates
                          candidates={content.total_candidates}
                        />
                        <CandidatesOnTrack
                          candidates={content.on_track_candidates}
                        />
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
                            <SearchIcon
                              sx={{ width: "35px", height: "35px" }}
                              color="info"
                            />
                          }
                        >
                          SHOW
                        </CloseButton>
                        {content.recruit_status.toLowerCase() == "closed" && (
                          <CloseButton
                            variant="contained"
                            color="error"
                            startIcon={<HighlightOffIcon />}
                            onClick={() => closedPost(content.job_id)}
                            disabled
                          >
                            CLOSE
                          </CloseButton>
                        )}
                        {content.recruit_status.toLowerCase() !== "closed" && (
                          <CloseButton
                            variant="contained"
                            color="error"
                            startIcon={<HighlightOffIcon />}
                            onClick={() => closedPost(content.job_id)}
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
                      <Typography variant="body2">
                        {content.about_job_position}
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography variant="subtitle1" color="error.main">
                        Mandatory Requirements
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ whiteSpace: "pre-wrap" }}
                      >
                        {content.job_requirement}
                      </Typography>
                    </AccordionDetails>
                    <AccordionDetails>
                      <Typography variant="subtitle1" color="error.main">
                        Optional Requirements
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ whiteSpace: "pre-wrap" }}
                      >
                        {content.option_requirement}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </>
              );
            })}
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
                  value="all"
                  control={<Radio />}
                  label="All"
                  onClick={(e) => handlechoose(e.target.value)}
                />
                <CheckBoxTextStyled
                  value="Waiting"
                  control={<Radio />}
                  label="Waiting"
                  onClick={(e) => handlechoose(e.target.value)}
                />
                <CheckBoxTextStyled
                  value="In progress"
                  control={<Radio />}
                  label="In progress"
                  onClick={(e) => handlechoose(e.target.value)}
                />
                <CheckBoxTextStyled
                  value="closed"
                  control={<Radio />}
                  label="Closed"
                  onClick={(e) => handlechoose(e.target.value)}
                />
              </RadioGroup>
            </FormControl>
            {/*------------------------------ Start Candidates ------------------------------*/}

            <Typography variant="h5" sx={{ marginBottom: "8px" }}>
              {candidatesInputs.length} candidates found
            </Typography>

            {/*------------------------------ Start Candidates ------------------------------*/}

            {candidatesInputs.map((content, index) => {
              return (
                <Accordion
                  expanded={expanded === `panal${index + 1}`}
                  onChange={handleChange(`panal${index + 1}`)}
                  sx={{ marginBottom: "16px", width: "945px" }}
                >
                  <AccordionSummaryStyled
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="flex-start"
                      width="auto"
                      spacing={0}
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
                        <Typography variant="h6">{content.name}</Typography>
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
                            <LinkedInIcon
                              sx={{ marginRight: "6px", marginLeft: "10px" }}
                            />
                            {content.title}
                          </Stack>
                        </Typography>
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
                            {content.email}
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
                            {content.phone}
                          </Stack>
                        </Typography>
                      </Stack>
                      {/*------------------------------ Column 3 ------------------------------*/}
                      <Stack>
                        <Stack
                          direction="column"
                          justifyContent="flex-start"
                          alignItems="center"
                          width="90px"
                          spacing={0}
                          textAlign="center"
                          margin="0px 10px 0px 10px"
                        >
                          <MailOutlineIcon
                            sx={{ marginRight: "6px", marginLeft: "10px" }}
                          />
                          <Typography variant="caption">
                            Sent {content.date} days ago
                          </Typography>
                        </Stack>
                      </Stack>
                      {/*------------------------------ Column 4 ------------------------------*/}
                      <Stack>
                        <Stack
                          direction="column"
                          justifyContent="flex-start"
                          alignItems="center"
                          width="90px"
                          textAlign="center"
                          spacing={0}
                          color="info.main"
                        >
                          <PauseCircleOutlineIcon
                            sx={{ marginRight: "6px", marginLeft: "10px" }}
                          />
                          <Typography variant="caption">
                            Waiting for review
                          </Typography>
                        </Stack>
                      </Stack>
                      {/*------------------------------ Column 5 ------------------------------*/}
                      <Stack
                        height="auto"
                        color="info.main"
                        margin="10px 0 0 20px"
                      >
                        <CloseButton
                          variant="contained"
                          color="background"
                          onClick={() => closedPost(content.job_id)}
                        >
                          Mark as started
                        </CloseButton>
                      </Stack>
                    </Stack>
                  </AccordionSummaryStyled>
                  <Stack margin="0 10px 10px 10px ">
                    <Typography variant="caption">
                      LAST UPDATE ON {content.updated}
                    </Typography>
                    <Typography variant="subtitle1" color="error.main">
                      Professional experience
                    </Typography>
                    <Typography variant="body2">
                      {content.experience}
                    </Typography>
                    <Typography variant="subtitle1" color="error.main">
                      Why are you interested in working at The company name SA
                    </Typography>
                    <Typography variant="body2">
                      {content.experience}
                    </Typography>
                  </Stack>
                </Accordion>
              );
            })}
          </div>
        </Box>
      </Box>
    </Box>
  );
}
