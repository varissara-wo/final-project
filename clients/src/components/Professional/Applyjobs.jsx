import {
  Typography,
  FormControlLabel,
  FormControl,
  Box,
  Radio,
} from "@mui/material";
import styled from "@emotion/styled";
import { UploadButton } from "../Register/Styles";
import { useState } from "react";
import React from "react";
import MultilineInputJobPost from "../Recruiter/MultilineInputJobPost.jsx";
import { FileUploadOutlined, Propane, PropaneSharp } from "@mui/icons-material";
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
export function Applyjobs() {
  const innitialFileData = "No file chosen";
  const [fileStatus, setFileStatus] = useState(innitialFileData);

  const [cv, setCv] = useState({});
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileType = file.type.split("/");
    if (fileType[1] !== "jpeg" && fileType[1] !== "png") {
      return setFileStatus("Not a PNG, JPEG, IMG file");
    }
    if (file.size > 5 * 1024 * 1024) {
      return setFileStatus("File size more than 5 MB");
    } else {
      setFileStatus(`File ${file.name}`);
      setCv({ [event.target.name]: file });
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h5" color="error.main">
          Complete your application
        </Typography>
        <Typography
          variant="overline"
          color="error.main"
          sx={{ marginTop: "5px" }}
        >
          Send your cv updated
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "5px",
          }}
        >
          <CheckBoxTextStyled
            value="all"
            control={<Radio />}
            label="Use current CV"
          />
          <CheckBoxTextStyled
            value="all"
            control={<Radio />}
            label="Upload new CV"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          {" "}
          <UploadButton
            startIcon={<FileUploadOutlined />}
            variant="contained"
            component="label"
            color="primary"
            helperText="hi"
            position="relative"
          >
            Choose a file
            <input
              left="10px"
              hidden
              width="300px"
              accept=".pdf"
              multiple
              type="file"
              name="cv"
              onChange={handleFileChange}
            />
          </UploadButton>
          <Typography
            component="span"
            variant="body2"
            color="secondary.main"
            sx={{ marginTop: "10px" }}
          >
            {fileStatus}
          </Typography>
        </Box>

        <Typography
          component="p"
          variant="body2"
          marginTop="4px"
          color="info.main"
          textTransform="none"
        >
          Only PDF. Max size 5MB
        </Typography>
        <Typography variant="overline" color=" warning.main">
          Professional experience (taken from your profile)
        </Typography>
        <MultilineInputJobPost placeholder="Mention things about The Company Name SA that excite you. Why would you be a good candidate?" />
        <Typography variant="overline" color=" warning.main">
          Why are you interested in working at The company name SA
        </Typography>
        <MultilineInputJobPost placeholder="Mention things about The Company Name SA that excite you. Why would you be a good candidate?"/>
        <Typography variant="caption" color="info.main">
        Between 50 and 1000 characters
        </Typography>
      </Box>
    </>
  );
}
