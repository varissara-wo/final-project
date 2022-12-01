import { useState, useEffect } from "react";
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import usePosts from "../../hooks/usePost.jsx";
import { Buttonwidth } from "../Register/Styles.jsx";
import { useAuth } from "../../contexts/authentication.jsx";
import MultilineInputJobPost from "./MultilineInputJobPost.jsx";
import OnelineInputJobPost from "./OnelineInputJobPost.jsx";
import { Textseacrh1, Categoryinput } from "../Professional/styles.jsx";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import InputAdornment from "@mui/material/InputAdornment";

export function Createjobpost() {
  const { createPost } = usePosts();
  const { getUserData, state, isUserLoading, setIsUserLoading } = useAuth();
  const [inputValue, setInputValue] = React.useState("");
  const [inputValue1, setInputValue1] = React.useState("");
  const [info, setInfo] = useState({
    recruiterId: "",
    category: "",
    title: "",
    type: "",
    minSalary: 0,
    maxSalary: 0,
    about: "",
    requirement: "",
    optional: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      getUserData();
      setInfo({ ...info, recruiterId: state.user["id"] });
    }, 800);
    return () => clearTimeout(timer);
  }, [isUserLoading]);

  console.log(info);
  //categeory
  const category = [
    "Manufacturing",
    "Legal",
    "Education",
    "Goverment",
    "Sales",
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    createPost({
      ...info,
    });
    setIsUserLoading(true);
  };

  const handlerInputChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const mainInputs = [
    {
      name: "title",
      placeholder: "Software engineer",
      label: "JOB TITLE",
    },
  ];

  const additionalInputs = [
    {
      name: "about",
      placeholder:
        "Describe the main functions and characteristics of your job position",
      label: "ABOUT THE JOB POSITION",
    },
    {
      name: "requirement",
      placeholder: "List each mandatory requirement in a new line",
      label: "MANDATORY REQUIREMENTS",
    },
    {
      name: "optional",
      placeholder: "List each optional requirement in a new line",
      label: "OPTIONAL REQUIREMENTS",
    },
  ];

  //type
  const type = ["Fulltime", "Partime"];
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
          Create new job posting
        </Typography>
        <Box>
          <Typography
            variant="h5"
            style={{ fontWeight: "400", marginBottom: "8px" }}
          >
            Main information
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/*------------------------------ Start titlebox ------------------------------*/}

            {mainInputs.map((input, index) => {
              return (
                <OnelineInputJobPost
                  key={index}
                  {...input}
                  value={info[input.name]}
                  onChange={handlerInputChange}
                />
              );
            })}
          </Typography>
          {/*------------------------------ Dropdown category ------------------------------*/}
          <Typography>
            <Typography
              variant="overline"
              inputProps={{ style: { marginBottom: "4px" } }}
            >
              Category
            </Typography>
            <Categoryinput
              size="small"
              value={inputValue}
              color="primary"
              focused
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                setInfo({
                  ...info,
                  category: newInputValue,
                });
              }}
              id="controllable-states-demo"
              options={category}
              sx={{
                width: "300px",
                height: "40px",
                borderRadius: "8px",
                paddindTop: "0px",
                "& .css-uyzgbr-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#F48FB1",
                  },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  placeholder="Select or create category"
                />
              )}
            />
          </Typography>
          {/*------------------------------ Dropdown type ------------------------------*/}
          <Typography>
            <Typography variant="overline">Type</Typography>
            <Categoryinput
              size="small"
              value={inputValue1}
              color="primary"
              focused
              inputValue={inputValue1}
              onInputChange={(event, newInputValue) => {
                setInputValue1(newInputValue);
                setInfo({
                  ...info,
                  type: newInputValue,
                });
              }}
              id="controllable-states-demo"
              options={type}
              sx={{
                width: "300px",
                height: "40px",
                borderRadius: "8px",
                paddindTop: "0px",
                "& .css-uyzgbr-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#F48FB1",
                  },
              }}
              renderInput={(params) => (
                <TextField {...params} label="" placeholder="Select a type" />
              )}
            />
          </Typography>
          {/*------------------------------ Salary range ------------------------------*/}
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: "10px",
            }}
          >
            <Typography variant="overline" sx={{}}>
              Salary Range
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              <Textseacrh1
                id="outlined-basic"
                variant="outlined"
                placeholder="min"
                sx={{
                  width: "102px",
                  height: "20px",
                  borderRadius: "8px",
                }}
                type="number"
                color="primary"
                focused
                onChange={(e) => {
                  setInfo({
                    ...info,
                    minSalary: e.target.value,
                  });
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MonetizationOnIcon />
                    </InputAdornment>
                  ),
                }}
              ></Textseacrh1>
              <HorizontalRuleIcon
                sx={{ marginTop: "8px", marginLeft: "20px" }}
              />

              <Textseacrh1
                id="outlined-basic"
                variant="outlined"
                placeholder="max"
                color="primary"
                focused
                type="number"
                onChange={(e) => {
                  setInfo({
                    ...info,
                    maxSalary: e.target.value,
                  });
                }}
                sx={{ marginLeft: "5px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MonetizationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Typography>
          {/*------------------------------ Start information------------------------------*/}
          <Typography variant="h5" mb="8px" style={{ fontWeight: "400" }}>
            Addtional information
          </Typography>
        </Box>

        {additionalInputs.map((input, index) => {
          return (
            <MultilineInputJobPost
              key={index}
              {...input}
              value={info[input.name]}
              onChange={handlerInputChange}
            />
          );
        })}

        <Buttonwidth
          variant="contained"
          color="primary"
          onClick={(e) => {
            handleSubmit(e);
          }}
          type="submit"
          sx={{ marginBottom: "100px" }}
        >
          POST THIS JOB
        </Buttonwidth>
      </Box>
    </Box>
  );
}
