import { useState } from "react";
import React from "react";
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

export function Jobpostings() {
  const [numberOfJobs, setNumberOfJobs] = useState(4);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
    width: "115px",
    "& .MuiSvgIcon-root": {
      fontSize: 28,
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#F5F5F6", width: "1500px", height: "100vh" }}>
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
        <Typography variant="h4" sx={{ marginBottom: "20px" }}>
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
            <CheckBoxTextStyled value="All" control={<Radio />} label="All" />
            <CheckBoxTextStyled
              value="With candidates on track"
              control={<Radio />}
              label="With candidates on track"
            />
            <CheckBoxTextStyled
              value="Closed"
              control={<Radio />}
              label="Closed"
            />
          </RadioGroup>
        </FormControl>

        <Typography variant="h5" sx={{ marginBottom: "8px" }}>
          {numberOfJobs} jobs postings found
        </Typography>
        <div>
          {/*------------------------------ Start information------------------------------*/}
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
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={0}
              >
                <Typography variant="h6" sx={{}}>
                  The Job title
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
                    <MonetizationOnOutlinedIcon
                      sx={{ marginRight: "6px", marginLeft: "10px" }}
                    />
                    2.0k - 2.2k
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
                <OpenOn date="2/2/22" />
                <TotalCandidates candidates="5" />
                <CandidatesOnTrack candidates="3" />
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
                  startIcon={<img src="pic/find.svg" alt="find that job" />}
                >
                  SHOW
                </CloseButton>
                <CloseButton
                  variant="contained"
                  color="error"
                  startIcon={<HighlightOffIcon />}
                >
                  CLOSE
                </CloseButton>
              </Stack>
            </AccordionSummaryStyled>

            <AccordionDetails>
              <Typography variant="subtitle1" color="error.main">
                About the job position
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quis diam fringilla, luctus lectus dictum, volutpat lacus.
                Vivamus lacinia felis ut mauris lacinia elementum. Sed faucibus
                dapibus egestas. Etiam dolor neque, posuere at purus cursus,
                molestie eleifend lacus. Aenean eu diam eu enim commodo accumsan
                ut sit amet odio. Nam maximus varius leo, et porttitor ante
                sodales ut. Pellentesque euismod commodo nunc ut tincidunt. Sed
                fringilla nunc leo, a euismod ipsum aliquet placerat. Integer
                suscipit semper mi, sit amet mollis augue mollis in. Proin
                vestibulum accumsan elit, id pellentesque diam fermentum eget.
                Aliquam mattis quis quam ut faucibus. Duis finibus nulla nec
                enim eleifend dapibus.
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography variant="subtitle1" color="error.main">
                Mandatory Requirements
              </Typography>
              <Typography variant="body2">
                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionDetails>
            <AccordionDetails>
              <Typography variant="subtitle1" color="error.main">
                Optional Requirements
              </Typography>
              <Typography variant="body2">
                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/*------------------------------ End information------------------------------*/}
        </div>
      </Box>
    </Box>
  );
}
