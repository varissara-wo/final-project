import React from "react";
import NavBox from "../components/Navbar.jsx";
import styled from "@emotion/styled";
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
  ImageListItem,
} from "@mui/material";

const ErrorPage = () => {
  return (
    <>
      <Box>
        <NavBox />
      </Box>
      <Box width="auto">
        <Box
          margin="0px"
          marginTop="64px"
          width="auto"
          height="100vh"
          sx={{
            display: "flex",
            backgroundColor: "#F5F5F6",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box margin="60px">
            <Typography variant="h4" sx={{ fontWeight: "700" }}>
              ERROR
            </Typography>
            <Typography variant="h1" sx={{ fontWeight: "700" }}>
              404
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "700" }}>
              PAGE NOT FOUND
            </Typography>
          </Box>
          <Box margin="60px">
            {" "}
            <ImageListItem>
              <img src="images/Anxiety.svg" alt="error" />
            </ImageListItem>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ErrorPage;
