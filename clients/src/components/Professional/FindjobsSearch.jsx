import { Textinput, Textseacrh, Textseacrh1 } from "./styles.jsx";
import { useState, useEffect } from "react";
import React from "react";
import { Search, MonetizationOn, HorizontalRule } from "@mui/icons-material";
import {
  Typography,
  CircularProgress,
  Stack,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import JobWrapper from "./JobWrapper.jsx";
import usePosts from "../../hooks/usePost.jsx";
import { useAuth } from "../../contexts/authentication.jsx";

export function Findjobssearch() {
  const [categoryValue, setCategoryValue] = React.useState();
  const [categoryInputValue, setCategoryInputValue] = React.useState("");
  const [typeValue, setTypeValue] = React.useState();
  const [typeInputValue, setTypeInputValue] = React.useState("");
  const [keyword, setKeyword] = useState("");
  const options = ["Manufacturing", "Legal", "Education", "Goverment", "Sales"];
  const options1 = ["Fulltime", "Partime"];
  const [salary, setSalary] = useState({});
  const {
    getSearch,
    getJobData,
    isLoading,
    followJob,
    setIsLoading,
    followJobApplication,
  } = usePosts();
  const { state, getUserData, isUserLoading } = useAuth();

  const handlerSearchSalary = (e, type) => {
    setSalary({ ...salary, [type]: e.target.value });
    setIsLoading(true);
  };
  const handlerSearchKeyword = (e) => {
    setKeyword(e.target.value);
    setIsLoading(true);
  };

  const handlerFollow = (jobId) => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      followJobApplication(jobId, state.user["id"]);
    }, 800);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getUserData();
      getSearch(
        keyword,
        categoryValue,
        salary.min,
        salary.max,
        typeValue,
        state.user["id"]
      );
    }, 800);
    return () => clearTimeout(timer);
  }, [isLoading, setIsLoading, isUserLoading]);

  console.log(isUserLoading);

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F6",
        width: "100%",
        height: "100%",
        minWidth: "100vh",
        minHeight: "100vh",
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
            onChange={handlerSearchKeyword}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
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
              value={categoryValue}
              color="primary"
              focused
              onChange={(event, newValue) => {
                setCategoryValue(newValue);
                setIsLoading(true);
              }}
              inputValue={categoryInputValue}
              onInputChange={(event, newInputValue) => {
                setCategoryInputValue(newInputValue);
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
              value={typeValue}
              color="primary"
              focused
              onChange={(event, newValue) => {
                setTypeValue(newValue);
              }}
              inputValue={typeInputValue}
              onInputChange={(event, newInputValue) => {
                setTypeInputValue(newInputValue);
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
                onChange={(e) => {
                  handlerSearchSalary(e, "min");
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MonetizationOn />
                    </InputAdornment>
                  ),
                }}
              ></Textseacrh1>
              <HorizontalRule sx={{ marginTop: "8px", marginLeft: "18px" }} />

              <Textseacrh1
                id="outlined-basic"
                variant="outlined"
                placeholder="max"
                color="primary"
                focused
                onChange={(e) => {
                  handlerSearchSalary(e, "max");
                }}
                type="number"
                sx={{ marginLeft: "5px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MonetizationOn />
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
            height="50vh"
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
              let isFollow;
              if (followJob.includes(item.job_id)) {
                isFollow = true;
              } else {
                isFollow = false;
              }

              return (
                <JobWrapper
                  key={index}
                  img={item.logo_url}
                  category={item.name}
                  type={item.type}
                  name={item.company_name}
                  minSalary={item.min_salary}
                  maxSalary={item.max_salary}
                  jobTitle={item.job_title}
                  jobId={item.job_id}
                  isFollow={isFollow}
                  handlerFollow={handlerFollow}
                />
              );
            })}
        </Box>
      </Box>
    </Box>
  );
}
