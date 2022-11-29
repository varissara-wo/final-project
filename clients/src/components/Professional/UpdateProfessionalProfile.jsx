
import React, { useState } from "react";
import { Typography, Box, TextField } from "@mui/material";
import { InputLabelStyle, Datepic } from "../Register/Styles.jsx";
import OnelineInput from "../Register/OnelineInput";
import EmailInput from "../Register/EmailInputs.jsx";
import MultilineInput from "./MultilineInput.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FileUploadOutlined } from "@mui/icons-material";
import { Buttonwidth, UploadButton } from "../Register/Styles";
import usePosts from "../../hooks/usePost.jsx";
import { useEffect } from "react";
import { useAuth } from "../../contexts/authentication.jsx";

const UpdateProfessionalProfile = () => {
  const innitialFileData = "No file chosen";
  const [value, setValue] = React.useState(null);
  const [fileStatus, setFileStatus] = useState(innitialFileData);
  const { createPost, UpdateProifleProfessional } = usePosts();
  const { state, getUserData } = useAuth();
  const { cv, setCv } = useState({
    cv: state.user.profile.cv_url,
  });

  const handlerInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    const formData = new FormData();
    console.log(userData);
    event.preventDefault();
    const data = {
      ...userData,
    };
    console.log(data)
    for (let key in data) {
      formData.append(key, data[key]);
    }
    console.log(formData)
    UpdateProifleProfessional(state.user["id"], formData);
  };

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    phone: "",
    birthday: "",
    linkedin: "",
    title: "",
    experience: "",
    education: "",
    cv: {},
  });

  useEffect(() => {
    getUserData()
    setUserData({
      email: state.user.profile.email,
      name: state.user.profile.name,
      phone: state.user.profile.phone,
      birthday: state.user.profile.birthday,
      linkedin: state.user.profile.linkedin,
      title: state.user.profile.job_title,
      experience: state.user.profile.experience,
      education: state.user.profile.education,
      cv: state.user.profile.cv,
    })
  }, [])





  const input = [
    {
      name: "name",
      type: "text",
      placeholder: "John Doe",
      errorMessage: "",
      pattern: /\W+/,
      label: "NAME",
      value: userData.name,
    },
    {
      name: "phone",
      type: "text",
      placeholder: "+66xxxxxxxxx",
      errorMessage: "** Phone number not valid",
      pattern: /^(\+66)(\d{9})$/gm,
      label: "PHONE",
      value: userData.phone,
    },
  ];
  const input2 = [
    {
      name: "title",
      type: "text",
      placeholder: "Developer",
      errorMessage: "",
      pattern: /\W+/,
      label: "TITLE",
      value: userData.title,
    },
  ];
  const input3 = [
    {
      name: "experience",
      type: "text",
      placeholder:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla.",
      pattern: /\W+/,
      label: "PROFESSIONAL EXPERIENCE",
      value: userData.experience,
    },
    {
      name: "education",
      type: "text",
      placeholder:
        "Pellentesque ut mauris neque. Maecenas posuere sit amet erat at placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.",
      pattern: /^(\+66)(\d{9})$/gm,
      label: "EDUCATION",
      value: userData.education,
    },
  ];
  const linkedin = {
    name: "linkedin",
    type: "text",
    placeholder: "https://www.linkedin.com/in/username",
    errorMessage: "** Url should be linkedin profile",
    pattern:
      /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gm,
    label: "LINKEDIN URL",
    value: userData.linkedin,
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const type = file.type.split("/");
    console.log(type)
    //Validate the file is PDF
    if (type[1] !== "pdf") {

      return setFileStatus("Not a PDF file");
    } else {
      setFileStatus(file.name);
    }
    console.log(userData)
    setUserData({ ...userData, [event.target.name]: file });
    console.log(userData)
  };

  console.log(userData.title)

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
        {/*------------------------------ Head ------------------------------*/}
        <Typography
          variant="h4"
          sx={{ marginTop: "24px", marginBottom: "16px", fontWeight: "400" }}
        >
          Profile
        </Typography>
        {/*------------------------------ Form Part 1 ------------------------------*/}
        <Typography
          variant="h5"
          sx={{ marginTop: "10px", marginBottom: "0px", fontWeight: "400" }}
        >
          Personal Information
        </Typography>
        <EmailInput user="professional" value={userData.email} onChange={handlerInputChange} />
        {input.map((input, index) => {
          return (
            <OnelineInput
              key={index}
              {...input}
              onChange={handlerInputChange}
            />
          );
        })}
        <InputLabelStyle>BIRTHDAY</InputLabelStyle>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Datepic
            color="primary"
            focused
            sx={{ width: "350px", Height: "36px", marginBottom: "16px" }}
            onChange={(newValue) => {
              setUserData({
                ...userData,
                birthday: newValue.$d,
              });
              setValue(newValue)
                ;
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <OnelineInput
          {...linkedin}
          onChange={handlerInputChange}
        />
        {/*------------------------------ Form Part 2 ------------------------------*/}
        <Typography
          variant="h5"
          sx={{ marginTop: "10px", marginBottom: "0px", fontWeight: "400" }}
        >
          Professional information
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginTop: "10px",
            marginBottom: "0px",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          Changes made here will be reflected in your future applications
        </Typography>
        {input2.map((input, index) => {
          return (
            <OnelineInput
              key={index}
              {...input}
              onChange={handlerInputChange}
            />
          );
        })}
        {input3.map((input, index) => {
          return (
            <MultilineInput
              key={index}
              {...input}
              onChange={handlerInputChange}
            />
          );
        })}
        <InputLabelStyle>UPLOAD/UPDATE YOUR CV</InputLabelStyle>
        <UploadButton
          startIcon={<FileUploadOutlined />}
          variant="contained"
          component="label"
          color="primary"
          helperText="hi"
          position="relative"
          sx={{ width: "auto", fontSize: "12px", padding: "9px" }}
        >
          Choose a file
          <input
            left="10px"
            hidden
            width="300px"
            accept=".PDF"
            multiple
            type="file"
            name="cv"
            onChange={handleFileChange}
          />
        </UploadButton>{" "}
        <Typography variant="overline" sx={{ color: "#8E8E8E" }}>
          Only PDF. Max size 5MB
        </Typography>
        <Typography variant="overline" sx={{ color: "#8E8E8E" }}>
          {fileStatus}
        </Typography>
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
};


export default UpdateProfessionalProfile;


