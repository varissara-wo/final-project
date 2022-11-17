import { useState } from "react";
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
                  src="/images/company-logo/Baby.png"
                  width="100%"
                  height="auto"
                />
              </Box>
              <Stack sx={{ marginLeft: "18px" }}>
                <Typography variant="h5" sx={{ marginBottom: "8px" }}>
                  The company name SA
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
            <Typography variant="h3">The job title</Typography>
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
                  <Typography variant="h5">Full time</Typography>
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
                  <Typography variant="h5">2,000 - 2,500</Typography>
                </Stack>
              </DisplayStyle>
            </Stack>
          </Stack>
          {/*------------------------------ Job Content ------------------------------*/}
          <Stack width={"90%"} marginTop="54px">
            <Stack marginBottom="16px">
              <Typography variant="h5" color="error">
                About The company name SA
              </Typography>
              <Typography variant="body1" color="warning.main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque porta nunc viverra velit tincidunt, non vehicula
                augue vehicula. Donec viverra luctus nisl, sed vehicula ligula.
                Vivamus maximus metus a magna fermentum ullamcorper. Phasellus
                ultrices vestibulum ligula ut pellentesque. Quisque quis congue
                quam. Nunc porttitor risus lorem, in blandit augue iaculis
                vitae. Cras sit amet fringilla neque. Fusce ac elit ut quam
                ultrices bibendum. Curabitur vitae dignissim quam. Suspendisse
                aliquet massa id orci volutpat ullamcorper. Nunc at ante sem.
                Etiam elementum, mi eget aliquam lobortis, elit libero tempus
                ex, vel pretium nisi risus ac augue.
              </Typography>
            </Stack>
            <Stack marginBottom="16px">
              <Typography variant="h5" color="error">
                About the job position
              </Typography>
              <Typography variant="body1" color="warning.main">
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
                - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
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
