import { useState, useEffect } from "react";
import React from "react";
import { Box, Stack, CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";
import usePosts from "../../hooks/usePost.jsx";
import MultilineInputJobPost from "./MultilineInputJobPost.jsx";
import OnelineInputJobPost from "./OnelineInputJobPost.jsx";
import { Buttonwidth, UploadButton } from "../Register/Styles.jsx";
import { FileUploadOutlined } from "@mui/icons-material";

export default function Profile() {
  const innitialFileData = "No file chosen";
  const [fileStatus, setFileStatus] = useState(innitialFileData);
  const { createPost, getUserprofile, profile, isLoading } = usePosts();
  console.log(profile.email);
  const [info, setInfo] = useState({
    email: "",
    name: "",
    website: "",
    about: "",
  });

  useEffect(() => {
    setTimeout(() => {
      getUserprofile(7);
      setInfo({
        email: profile.email,
        name: profile.company_name,
        website: profile.company_website,
        about: profile.about_company,
      });
    }, 800);
  }, [isLoading]);

  console.log(info);

  console.log(profile);
  const additionalInputs = [
    {
      name: "email",

      label: "COMPANY EMAIL",
      value: info.email,
    },
    {
      name: "name",

      label: "COMPANY NAME",
      value: info.name,
    },
    {
      name: "website",

      label: "COMPANY WEBSITE",
      value: info.website,
    },
  ];

  const handlerInputChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    console.log(info);
    event.preventDefault();
    createPost({
      ...info,
    });
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    //Validate the file is PDF
    if (file.type !== "application/png") {
      return setFileStatus("Not a Png file");
    }
  };

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
        {isLoading === true && (
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#F5F5F6",
              width: "90%",
              height: "100%",
              minHeight: "100vh",
              minWidth: "100vh",
              // marginLeft: "240px",
            }}
          >
            <CircularProgress disableShrink />
          </Stack>
        )}
        {isLoading === false && (
          <>
            <Typography
              variant="h4"
              sx={{
                marginTop: "24px",
                marginBottom: "16px",
                fontWeight: "400",
              }}
            >
              Profile
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "white",
                  width: "80px",
                  height: "80px",
                  borderRadius: "16px",
                  boxShadow: "5",
                }}
              >
                <img src={profile.logo_url} alt="getthatjoblogo" />
              </Box>
              <Box
                sx={{
                  padding: "0 0 0 10px",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                <Typography variant="overline" sx={{ marginBottom: "3px" }}>
                  COMPANY LOGO
                </Typography>
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
                    accept=".PNG"
                    multiple
                    type="file"
                    name="cv"
                    onChange={handleFileChange}
                  />
                </UploadButton>
                <Typography variant="overline" sx={{ color: "#8E8E8E" }}>
                  PNG,JPEG,IMG
                </Typography>
              </Box>{" "}
              <Typography variant="overline" sx={{ paddingLeft: "10px" }}>
                {fileStatus}
              </Typography>
            </Box>

            {/*------------------------------ Company Data Update ------------------------------*/}

            {additionalInputs.map((input, index) => {
              console.log(input);
              return (
                <OnelineInputJobPost
                  key={index}
                  {...input}
                  // value={info[input.name]}

                  onChange={handlerInputChange}
                />
              );
            })}
            <MultilineInputJobPost
              name="about"
              onChange={handlerInputChange}
              label="ABOUT THE COMPANY"
              value={info.about}
            />
            <Buttonwidth
              variant="contained"
              color="primary"
              onClick={(e) => {
                handleSubmit(e);
              }}
              type="submit"
              sx={{ marginBottom: "100px", width: "auto" }}
            >
              UPDATE PROFILE
            </Buttonwidth>
          </>
        )}
      </Box>
    </Box>
  );
}
