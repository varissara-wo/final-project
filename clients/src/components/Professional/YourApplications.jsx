import { useEffect, useState } from "react";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
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
import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import { SentAgo, WaitingForReview } from "../Status";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { useAuth } from "../../contexts/professionalAuth";
import usePosts from "../../hooks/usePost";

export function YourApplications() {
  const [numberOfApplicationsFound, setNumberOfApplicationsFound] = useState(4);
  const [expanded, setExpanded] = useState(false);
  const { state } = useAuth();
  const { getJobApplications, jobApplicationsData, isLoading } = usePosts();

  // console.log(jobApplicationsData);

  // console.log(state);
  const user_email = state.user.id;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //Handle filter applications
  const [selectedFilterApplicationStatus, setSelectedFilterApplicationStatus] =
    useState("All");
  const handleFilterApplications = (event) => {
    console.log(event.target.value);
    setSelectedFilterApplicationStatus(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getJobApplications(user_email, selectedFilterApplicationStatus);
    }, 800);
  }, [selectedFilterApplicationStatus]);

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
          {numberOfApplicationsFound} applications found
        </Typography>
        <div>
          {/*------------------------------ Start information------------------------------*/}
          {/* {isLoading === true && (
            <Stack
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                backgroundColor: "#F5F5F6",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
                minWidth: "100vh",
                marginLeft: "240px",
              }}
            >
              <CircularProgress disableShrink />
            </Stack>
          )} */}
          {/* {isLoading === false &&} */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
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
                      src="/images/company-logo/Baby.png"
                      width="100%"
                      height="100%"
                    />
                  </Stack>
                  <Stack sx={{ marginLeft: "18px" }}>
                    <Typography variant="h6" sx={{}}>
                      The Job title
                    </Typography>
                    <Typography variant="subtitle2" color="secondary">
                      The Company Name SA
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
                    <VillaOutlinedIcon
                      sx={{
                        marginRight: "6px",
                      }}
                    />
                    Manufactoring
                    <DateRangeOutlinedIcon
                      sx={{ marginRight: "6px", marginLeft: "10px" }}
                    />
                    Full time
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
                    <MonetizationOnOutlinedIcon sx={{ marginRight: "6px" }} />
                    20k - 22k
                    <AccessTimeOutlinedIcon
                      sx={{ marginRight: "6px", marginLeft: "10px" }}
                    />
                    Posted 2 days ago
                  </Stack>
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={0}
              >
                <SentAgo day="5" />
                <WaitingForReview />
              </Stack>
            </AccordionSummaryStyled>
            <AccordionDetails sx={{ paddingBottom: "0", paddingTop: "0" }}>
              <Typography variant="overline" color="secondary">
                Last Updated on 03/22/21
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography variant="subtitle1" color="error.main">
                Professional experience
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                feugiat quam ut tempor maximus. Sed neque arcu, rhoncus
                elementum sodales a, tristique sed quam. Aliquam nibh velit,
                pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus
                ligula, elementum sit amet purus ut, sagittis molestie ex. In
                hendrerit orci tellus. Integer pharetra porttitor nulla, nec
                fringilla dolor ultricies et. Integer accumsan feugiat urna, eu
                hendrerit dui varius sit amet. Mauris eget tristique turpis.
                Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere
                vehicula.
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography variant="body2">
                Pellentesque ut mauris neque. Maecenas posuere sit amet erat at
                placerat. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Suspendisse potenti. Donec tempor lobortis nisl. Maecenas
                sit amet massa in tortor pulvinar sollicitudin. Fusce vitae
                feugiat felis, ut malesuada purus. Curabitur felis velit,
                interdum vitae viverra quis, sagittis ac nulla. Quisque tempus
                pharetra ornare. In sed nulla eget risus cursus facilisis vel
                quis nibh. Praesent euismod lectus a.
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography variant="subtitle1" color="error.main">
                Why are you interested in working at The company name SA
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas egestas ex at libero feugiat volutpat. Praesent
                fringilla scelerisque felis, ac elementum metus fringilla in.
                Maecenas et nibh fringilla, egestas arcu vel, tristique dui.
                Nulla quis suscipit erat, nec pretium arcu. Aenean blandit
                lacinia mauris, quis bibendum ante sagittis cursus. Pellentesque
                mattis ipsum et lorem euismod rutrum. Duis ullamcorper venenatis
                nisi, nec malesuada tellus tincidunt a. Maecenas suscipit odio
                sed justo accumsan iaculis. Quisque vitae erat ac felis
                tincidunt auctor vitae non est. Praesent vehicula feugiat
                faucibus.
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
              >
                <Typography variant="button" color={"secondary"}>
                  Download cv
                </Typography>
              </DownloadCvButton>
              <DeclineApplicaciontButton
                variant="contained"
                color="error"
                startIcon={<HighlightOffOutlinedIcon />}
                sx={{ marginLeft: "16px" }}
              >
                <Typography variant="button">decline applicacion</Typography>
              </DeclineApplicaciontButton>
            </Stack>
          </Accordion>
          {/*------------------------------ End information------------------------------*/}
        </div>
      </Box>
    </Box>
  );
}
