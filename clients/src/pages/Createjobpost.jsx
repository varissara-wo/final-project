import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input, Typography,Stack } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import TextField from "@mui/material/TextField";
import usePosts from "../hooks/usePost.jsx";
import {
  Buttonwidth
  
} from "../components/Authpage/Styles.jsx";
import {
  Textinput,
  Textseacrh,
  Textseacrh1,
  Textseacrhre,
  Categoryinput,Informationbox
} from "./styles.jsx";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import InputAdornment from "@mui/material/InputAdornment";
export function Createpost() {
  const [inputValue, setInputValue] = React.useState("");
  const [inputValue1, setInputValue1] = React.useState("");
  const [info, setInfo] = useState({
    title: "",
    category1: "",
    type: "",
    salarymin: 0,
    salarymax: 0,
    jobdetial: "",
    requiement: "",
    optional: "",
  });
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
     info
    });
  };
  const { createPost } = usePosts();
  //type
  const type = ["Fulltime", "Partime"];
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
          Create new job posting
        </Typography>
        <Box sx={{ marginLeft: "8px" }}>
          {" "}
          <Typography variant="h5">Main information </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {/*------------------------------ Start titlebox ------------------------------*/}
            <Typography variant="overline" sx={{ marginBottom: "3px" }}>
              Job title
            </Typography>
            <Textseacrhre
              id="outlined-basic"
              variant="outlined"
              placeholder="software engineer"
              color="primary"
              focused
              sx={{ width: "420px", height: "36px", marginBottom: "8px" }}
              onChange={(e) => {
                setInfo({
                  ...info,
                  title: e.target.value,
                });
              }}
            />
          </Typography>
          {/*------------------------------ Dropdown category ------------------------------*/}
          <Typography>
            <Typography variant="overline">Category</Typography>
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
                  category1: newInputValue,
                });
              }}
              
              id="controllable-states-demo"
              options={category}
              sx={{
                width: "300px",
                height: "40px",
                borderRadius: "8px",
                paddindTop: "0px",
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select or create category" />
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
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select a type" />
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
                    salarymin: e.target.value,
                  });
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MonetizationOnIcon />
                    </InputAdornment>
                  ),
                }}
              >
                {" "}
              </Textseacrh1>
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
                    salarymax: e.target.value,
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
          <Typography variant="h5">Addtional information </Typography>
        </Box>
        <Typography variant="overline" sx={{ marginBottom: "3px" }}>
          Job title
        </Typography>
        <Informationbox
          id="outlined-basic"
          variant="outlined"
          placeholder="Describe the main functions and characteristics of your job position"
          color="primary"
          focused
          sx={{ width: "420px", height: "36px", marginBottom: "50px" }}
          onChange={(e) => {
            setInfo({
              ...info,
              jobdetial: e.target.value,
            });
          }}
        />
         <Typography variant="overline" sx={{ marginBottom: "3px" }}>
         Mandatory Requirements
        </Typography>
        <Informationbox
          id="outlined-basic"
          variant="outlined"
          placeholder="List each mandatory requirement in a new line"
          color="primary"
          focused
          sx={{ width: "420px", height: "36px", marginBottom: "50px" }}
          onChange={(e) => {
            setInfo({
              ...info,
              requiement: e.target.value,
            });
          }}
        />
         <Typography variant="overline" sx={{ marginBottom: "3px" }}>
         Optional Requirements
        </Typography>
        <Informationbox
          id="outlined-basic"
          variant="outlined"
          placeholder="List each optional requirement in a new line"
          color="primary"
          focused
          sx={{ width: "420px", height: "36px", marginBottom: "50px" }}
          onChange={(e) => {
            setInfo({
              ...info,
              optional: e.target.value,
            });
          }}
        />
         <Buttonwidth
                                variant="contained"
                                color="primary"
                                onClick={{}}
                            >
                                POST THIS JOB
                            </Buttonwidth>
      </Box>
      
                           
                        
      
    </Box>
  );
}
