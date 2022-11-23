import { useState, useCallback } from "react";
import React from "react";
import FactoryIcon from "@mui/icons-material/Factory";
import BalanceIcon from "@mui/icons-material/Balance";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
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
import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { OpenOn, TotalCandidates, CandidatesOnTrack } from "../Status";
import { useEffect } from "react";
import { iconCategory } from "../../utils/utilsFunction";
import { FormatAlignCenter, TypeSpecimen } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

export function Jobpostings() {
  const [expanded, setExpanded] = useState(false);
  const { data, getPost, numberOfJobs, closedPost, selectPost } = usePosts();
  const [recruiterId, setRecruiterId] = useState("");
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
    width: "115px",
    "& .MuiSvgIcon-root": {
      fontSize: 28,
    },
  }));

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
        <Typography
          variant="h4"
          sx={{ marginTop: "24px", marginBottom: "16px", fontWeight: "400" }}
        >
          Job Postings
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
              value="all"
              control={<Radio />}
              label="All"
              onClick={(e) => handlechoose(e.target.value)}
            />
            <CheckBoxTextStyled
              value="onTrack"
              control={<Radio />}
              label="With candidates on track"
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

        <Typography variant="h5" sx={{ marginBottom: "8px" }}>
          {data.length} jobs postings found
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
                      <Typography variant="h6">{content.job_title}</Typography>
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

                      <TotalCandidates candidates={content.total_candidates} />
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
                    <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                      {content.job_requirement}
                    </Typography>
                  </AccordionDetails>
                  <AccordionDetails>
                    <Typography variant="subtitle1" color="error.main">
                      Optional Requirements
                    </Typography>
                    <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                      {content.option_requirement}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}

          {/*------------------------------ End information------------------------------*/}
        </div>
      </Box>
    </Box>
  );
}
