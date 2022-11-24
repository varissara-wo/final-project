import {
  Typography,
  FormControlLabel,
  FormControl,
  Box,
  Radio,
  CircularProgress,
} from "@mui/material";

import styled from "@emotion/styled";
import { UploadButton } from "../Register/Styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import MultilineInputJobPost from "../Recruiter/MultilineInputJobPost.jsx";
import { FileUploadOutlined } from "@mui/icons-material";
import { Button, RadioGroup } from "@mui/material";
import { bigIconCategory } from "../../utils/utilsFunction";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Stack } from "@mui/system";
import { SendButton } from "./Buttonsend";
import { Following } from "../Status";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import getPublishedDate from "../../utils/getPublishedDate";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MultilineInputJobPostBig from "../Recruiter/Multiinputbig.jsx";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import usePosts from "../../hooks/usePost.jsx";
import { useAuth } from "../../contexts/authentication";

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

function Applyjob(props) {
  const { getJobById, getJobByIdData, isLoading, getUser, userdata } =
    usePosts();
  const { state, getUserData } = useAuth();
  const navigate = useNavigate();
  const innitialFileData = "No file chosen";
  const [fileStatus, setFileStatus] = useState(innitialFileData);
  const { Apply } = usePosts();
  const [cv, setCv] = useState({});
  const { jobId } = props;

  const [apply, setApply] = useState({
    experience: "",
  });

  useEffect(() => {
    setTimeout(() => {
      console.log("hi");
      getUserData();
      getJobById(jobId);
      setApply({ ...apply, experience: state.user["profile"]["experience"] });
    }, 800);
  }, [isLoading]);

  const {
    company_name,
    created_at,
    job_title,
    logo_url,
    max_salary,
    min_salary,
    name,
    type,
  } = getJobByIdData;

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

  const handlerApply = () => {
    Apply(jobId, apply);
  };

  const DisplayStyle = styled(Stack)(() => ({
    border: "1px solid #BF5F82",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    borderRadius: "8px",
    display: "flex",
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 32px 16px 35px",
    marginLeft: "16px",
    marginRight: "16px",
  }));

  const icon = bigIconCategory(name);
  const date = getPublishedDate(created_at);
  const handlerBack = () => {
    navigate(`/findjobs/${jobId}`);
  };

  return (
    <>
      {isLoading === true && (
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
      )}
      {isLoading === false && (
        <Box
          sx={{
            backgroundColor: "#F5F5F6",
            width: "100%",
            height: "100%",
            minHeight: "100vh",
            minWidth: "100vh",
            marginLeft: "240px",
            paddingBottom: "70px",
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
            <Button
              variant="button"
              sx={{ padding: "0px", marginBottom: "19px" }}
              onClick={handlerBack}
            >
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
                <Box
                  sx={{
                    width: "75px",
                    height: "75px",
                    backgroundColor: "#fff",
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                    borderRadius: "8px",
                  }}
                >
                  <img alt="logo" src={logo_url} width="100%" height="auto" />
                </Box>
                <Stack sx={{ marginLeft: "18px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      marginBottom: "8px",
                      fontWeight: "400",
                    }}
                  >
                    {company_name}
                  </Typography>
                  <Following />
                </Stack>
              </Stack>
              <SendButton onClick={handlerApply} />
            </Stack>
            {/*------------------------------ Job Title ------------------------------*/}
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              width={"90%"}
            >
              <Typography
                variant="h3"
                sx={{
                  marginTop: "18px",
                  marginBottom: "9.5px",
                }}
              >
                {job_title}
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "17.5px",
                }}
              >
                <AccessTimeOutlinedIcon
                  sx={{
                    fontSize: 12.5,
                    marginBottom: "3px",
                    marginRight: "5px",
                    color: "#616161",
                    display: "flex",
                  }}
                />
                <Typography variant="overline" sx={{ display: "flex" }}>
                  Posted {date} days ago
                </Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="cebter"
                alignItems="center"
              >
                <DisplayStyle>
                  <Typography variant="subtitle1" color="secondary">
                    Category
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="cebter"
                    alignItems="center"
                  >
                    {icon}
                    <Typography variant="h5" fontWeight="400">
                      {name}
                    </Typography>
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
                      sx={{
                        fontSize: 25,
                        marginRight: "12px",
                        color: "#616161",
                      }}
                    />
                    <Typography variant="h5" fontWeight="400">
                      {type}
                    </Typography>
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
                      sx={{
                        fontSize: 25,
                        marginRight: "12px",
                        color: "#616161",
                      }}
                    />
                    <Typography variant="h5" fontWeight="400">
                      {min_salary} - {max_salary}
                    </Typography>
                  </Stack>
                </DisplayStyle>
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "120px",
              marginTop: "60px",
            }}
          >
            <Typography variant="h5" color="error.main" fontWeight={400}>
              Complete your application
            </Typography>
            <Typography
              variant="overline"
              color="warning.main"
              sx={{ marginTop: "5px" }}
            >
              Send your cv updated
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: "5px",
                marginBottom: "5px",
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <CheckBoxTextStyled
                  value="false"
                  control={<Radio />}
                  label="Use current CV"
                  onClick={(e) =>
                    setApply({ ...apply, statuscv: e.target.value })
                  }
                />
                <CheckBoxTextStyled
                  value="true"
                  control={<Radio />}
                  label="Upload new CV"
                  onClick={(e) =>
                    setApply({ ...apply, statuscv: e.target.value })
                  }
                />
              </RadioGroup>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
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
            <Typography
              variant="overline"
              color=" warning.main"
              sx={{ marginTop: "10px" }}
            >
              Professional experience (taken from your profile)
            </Typography>
            <MultilineInputJobPostBig
              placeholder="Describe something about your experience"
              value={apply.experience}
              onChange={(e) => {
                setApply({
                  ...apply,
                  experience: e.target.value,
                });
              }}
            />
            <Typography variant="overline" color=" warning.main">
              Why are you interested in working at The company name SA
            </Typography>
            <MultilineInputJobPost
              placeholder="Mention things about The Company Name SA that excite you. Why would you be a good candidate?"
              onChange={(e) => {
                setApply({
                  ...apply,
                  interest: e.target.value,
                });
              }}
              helperText="Between 50 and 100 characters"
            />

            <SendButton onClick={handlerApply} />
          </Box>
        </Box>
      )}
    </>
  );
}
export default Applyjob;
