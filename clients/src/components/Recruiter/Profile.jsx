import { useState, useEffect } from "react";
import React from "react";
import { Box, Stack, CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";
import usePosts from "../../hooks/usePost.jsx";
import MultilineInputJobPost from "./MultilineInputJobPost.jsx";
import OnelineInputJobPost from "./OnelineInputJobPost.jsx";
import { Buttonwidth, UploadButton } from "../Register/Styles.jsx";
import { FileUploadOutlined } from "@mui/icons-material";
import { useAuth } from "../../contexts/authentication.jsx";
export default function Profile() {
  const innitialFileData = "No file chosen";
  const [fileStatus, setFileStatus] = useState(innitialFileData);
  const {
    createPost,
    getUserprofile,
    profile,
    isLoading,
    setIsLoading,
    UpdateProifleRecruiter,
  } = usePosts();
  console.log(profile);

  const [info, setInfo] = useState({
    logo: {},
    email: "",
    company_name: "",
    company_website: "",
    about_company: "",
  });
  const { getUserData, state } = useAuth();

  const [img, setImg] = useState(profile.logo_url);
  const [isFetch, setIsFetch] = useState(true);
  console.log(state);
  useEffect(() => {
    const timer = setTimeout(() => {
      getUserData();
      getUserprofile(9);
      setInfo({
        logo: state.user.profile.logo_url,
        email: state.user.profile.email,
        company_name: state.user.profile.company_name,
        company_website: state.user.profile.company_website,
        about_company: state.user.profile.about_company,
      });
      setImg(profile.logo_url);
      console.log(img);
      setIsFetch(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const additionalInputs = [
    {
      name: "email",
      label: "COMPANY EMAIL",
      value: info.email,
    },
    {
      name: "company_name",
      label: "COMPANY NAME",
      value: info.company_name,
    },
    {
      name: "company_website",
      label: "COMPANY WEBSITE",
      value: info.company_website,
    },
  ];
  console.log(info.logo_url);
  const handlerInputChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    const formData = new FormData();
    event.preventDefault();
    const data = {
      ...info,
    };
    for (let key in data) {
      formData.append(key, data[key]);
    }
    UpdateProifleRecruiter(state.user["id"], formData);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const type = file.type.split("/");

    //Validate the file is PDF
    if (type[1] !== "png" && type[1] !== "jpeg") {
      return setFileStatus("Not a Png file");
    } else {
      setFileStatus(file.name);
    }

    setImg(URL.createObjectURL(file));
    setInfo({ ...info, [event.target.name]: file });
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
        {isFetch === true ||
          (img === undefined && (
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
          ))}
        {isFetch === false && img !== undefined && (
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
                <img src={img} alt="getthatjoblogo" />
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
                    accept=".png,.jpeg"
                    multiple
                    type="file"
                    name="logo"
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
                  onChange={handlerInputChange}
                />
              );
            })}
            <MultilineInputJobPost
              name="about_company"
              onChange={handlerInputChange}
              label="ABOUT THE COMPANY"
              value={info.about_company}
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
