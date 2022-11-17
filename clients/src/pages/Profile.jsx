import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import usePosts from "../hooks/usePost.jsx";
import MultilineInputJobPost from "../components/Recruiter/MultilineInputJobPost.jsx";
import OnelineInputJobPost from "../components/Recruiter/OnelineInputJobPost.jsx";
import { Buttonwidth, UploadButton } from "../components/Register/Styles.jsx";
import { FileUploadOutlined } from "@mui/icons-material";

export default function Profile() {
  const innitialFileData = "No file chosen";
  const [fileStatus, setFileStatus] = useState(innitialFileData);
  const { createPost } = usePosts();
  const [info, setInfo] = useState({
    email: "",
    name: "",
    website: "",
    about: "",
  });

  const additionalInputs = [
    {
      name: "email",
      placeholder: "web.works@mail.com",
      label: "COMPANY EMAIL",
    },
    {
      name: "name",
      placeholder: "The Web Works",
      label: "COMPANY NAME",
    },
    {
      name: "website",
      placeholder: "www.webworks.com",
      label: "COMPANY WEBSITE",
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
        marginLeft: "240px",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: "100px",
          marginTop: "10px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "10px", fontWeight: "400" }}
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
            <img src="pic/thewebwork.svg" alt="getthatjoblogo" />
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
          return (
            <OnelineInputJobPost
              key={index}
              {...input}
              value={info[input.name]}
              onChange={handlerInputChange}
            />
          );
        })}
        <MultilineInputJobPost
          name="about"
          onChange={handlerInputChange}
          label="ABOUT THE COMPANY"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta nunc viverra velit tincidunt, non vehicula augue vehicula. Donec viverra luctus nisl, sed vehicula ligula. Vivamus maximus metus a magna fermentum ullamcorper. Phasellus ultrices vestibulum ligula ut pellentesque. Quisque quis congue quam. Nunc porttitor risus lorem, in blandit augue iaculis vitae. Cras sit amet fringilla neque. Fusce ac elit ut quam ultrices bibendum. Curabitur vitae dignissim quam. Suspendisse aliquet massa id orci volutpat ullamcorper. Nunc at ante sem. Etiam elementum, mi eget aliquam lobortis, elit libero tempus ex, vel pretium nisi risus ac augue."
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
      </Box>
    </Box>
  );
}
