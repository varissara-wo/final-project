import { Textinput, Textseacrh, Textseacrh1 } from "./styles.jsx";
import { useState } from "react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Typography, CircularProgress, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { data } from "../data/data.js";
import JobWrapper from "../components/Professional/JobWrapper.jsx";
import usePosts from "../hooks/usePost.jsx";
import { useEffect } from "react";

export function Findjobssearch() {
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [value1, setValue1] = React.useState();
  const [inputValue1, setInputValue1] = React.useState("");
  const [search, setSearch] = useState("");

  //categeory
  const options = ["Manufacturing", "Legal", "Education", "Goverment", "Sales"];
  //type
  const options1 = ["Fulltime", "Partime"];

  const { getJobs, getJobData, isLoading } = usePosts();
  //function รับค่าsearch
  const inputchange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  useEffect(() => {
    setTimeout(() => {
      getJobs();
    }, 800);

    console.log(isLoading);
  }, [isLoading]);

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
        {/*------------------------------------- Search tilebox -------------------------------------*/}
        <Typography
          variant="h4"
          sx={{ marginTop: "24px", marginBottom: "16px", fontWeight: "400" }}
        >
          Find that job
        </Typography>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="overline" sx={{ marginBottom: "3px" }}>
            search by job title or company name
          </Typography>
          <Textseacrh
            id="outlined-basic"
            variant="outlined"
            placeholder="manufacturing, sales, swim"
            color="primary"
            focused
            sx={{ width: "420px", height: "36px", marginBottom: "8px" }}
            onChange={inputchange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Typography>
        {/*------------------------------------- Select category-------------------------------------*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Typography>
            <Typography variant="overline">Category</Typography>
            <Textinput
              size="small"
              value={value}
              color="primary"
              focused
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              sx={{
                width: "280px",
                height: "50px",
                borderRadius: "8px",
                paddindTop: "50px",
                "& .css-uyzgbr-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#F48FB1",
                  },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  placeholder="Select a category"
                />
              )}
            />
          </Typography>
          <Typography>
            <Typography variant="overline" sx={{ marginLeft: "10px" }}>
              Type
            </Typography>
            <Textinput
              size="small"
              value={value1}
              color="primary"
              focused
              onChange={(event, newValue) => {
                setValue1(newValue);
              }}
              inputValue={inputValue1}
              onInputChange={(event, newInputValue) => {
                setInputValue1(newInputValue);
              }}
              id="controllable-states-demo"
              options={options1}
              sx={{
                width: "280px",
                height: "40px",
                borderRadius: "8px",
                marginLeft: "10px",
                "& .css-uyzgbr-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#F48FB1",
                  },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  placeholder="Select a category"
                />
              )}
            />
          </Typography>
          {/*------------------------------------- salary Range-------------------------------------*/}
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="overline" sx={{ marginLeft: "10px" }}>
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
                  marginLeft: "10px",
                }}
                type="number"
                color="primary"
                focused
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MonetizationOnIcon />
                    </InputAdornment>
                  ),
                }}
              ></Textseacrh1>
              <HorizontalRuleIcon
                sx={{ marginTop: "8px", marginLeft: "18px" }}
              />

              <Textseacrh1
                id="outlined-basic"
                variant="outlined"
                placeholder="max"
                color="primary"
                focused
                type="number"
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
        </Box>
        {/*------------------------------------- data length-------------------------------------*/}
        <Typography
          variant="h6"
          sx={{ maginTop: "10px", marginLeft: "5px", marginBottom: "10px" }}
        >
          {getJobData.length} jobs for you
        </Typography>
        {/*------------------------------------- Mapdata -------------------------------------*/}

        {isLoading === true && (
          <Stack
            width="90%"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress disableShrink />
          </Stack>
        )}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {isLoading === false &&
            getJobData.map((item, index) => {
              const img = JSON.parse(item.logo_url).url;
              return (
                <JobWrapper
                  key={index}
                  img={img}
                  category={item.name}
                  type={item.type}
                  name={item.company_name}
                  minSalary={item.min_salary}
                  maxSalary={item.max_salary}
                  jobTitle={item.job_title}
                />
              );
            })}
          {getJobData.map((item, index) => {
            const img = JSON.parse(item.logo_url).url;
            return (
              <JobWrapper
                key={index}
                img={img}
                category={item.name}
                type={item.type}
                name={item.company_name}
                minSalary={item.min_salary}
                maxSalary={item.max_salary}
                jobTitle={item.job_title}
                jobId={item.job_id}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
