import { Textinput, Textseacrh, Textseacrh1 } from "./styles.jsx";
import { useState } from "react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ImageListItem from "@mui/material/ImageListItem";
import TextField from "@mui/material/TextField";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import BungalowIcon from "@mui/icons-material/Bungalow";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "@mui/material/Button";
import { Input, Typography } from "@mui/material";
import { data } from "../data/data.js";
export function Findjobssearch() {
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [value1, setValue1] = React.useState();
  const [inputValue1, setInputValue1] = React.useState("");
  const [number, setNumber] = useState(0);
  const [search, setSearch] = useState("");
  //categeory
  const options = ["Manufacturing", "Legal", "Education", "Goverment", "Sales"];
  //type
  const options1 = ["Fulltime", "Partime"];
  const data1 = data;
  //function รับค่าsearch
  const inputchange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  //function โชว์เลขว่ามีกี่กล่อง
  const changenum = (event) => {
    setNumber(data1.length);
  };

  return (
    <Box sx={{ backgroundColor: "#F5F5F6", width: "100%", height: "100vh" }}>
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
        <Typography variant="h4">Find that job</Typography>
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
            sx={{ width: "420px", height: "36px", marginBottom: "40px" }}
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
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select a category" />
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
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select a type" />
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
              >
                {" "}
              </Textseacrh1>
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
          {" "}
          {data.length} jobs for you
        </Typography>
        {/*------------------------------------- Mapdata -------------------------------------*/}
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
          {data1.map((item, itemIndex) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    backgroundColor: "background.paper",
                    width: "290px",
                    height: "170px",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 2px #00000033",
                    key: { itemIndex },
                    margin: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    {/*------------------------------------- รูป-------------------------------------*/}
                    <ImageListItem
                      sx={{
                        width: "75px",
                        height: "75px",
                        marginTop: "15px",
                        marginLeft: "5px",
                      }}
                    >
                      <img
                        src={`${item.img}?w=75&fit=crop&auto=format`}
                        //srcSet={`${item.img}?w=75&fit=crop&auto=format&dpr=2 2x`}
                      />{" "}
                    </ImageListItem>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "18px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100px",
                          height: "15px",
                          marginBottom: "10px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          marginTop: "10px",
                        }}
                      >
                        <BungalowIcon color="info" />

                        <Typography
                          variant="caption"
                          sx={{ marginLeft: "10px", marginTop: "5px" }}
                          color="#8E8E8E"
                        >
                          {" "}
                          {item.category}
                        </Typography>
                      </Box>
                      {/*------------------------------------- title -------------------------------------*/}
                      <Box
                        sx={{ width: "180px", height: "28px" }}
                        className="title"
                      >
                        <Typography variant="h6">The Job Title </Typography>
                      </Box>
                      <Box sx={{ width: "170px", height: "28px" }}>
                        <Typography variant="subtitle2" color="#8E8E8E">
                          {item.name}
                        </Typography>
                      </Box>
                      {/*------------------------------------- Type -------------------------------------*/}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          width: "250px",
                          height: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        <Box>
                          <CalendarMonthIcon color="info" />
                        </Box>
                        <Box sx={{ marginBottom: "5px", marginRight: "4px" }}>
                          <Typography variant="caption" color="#8E8E8E">
                            {item.type}{" "}
                          </Typography>{" "}
                        </Box>
                        <Box>
                          <MonetizationOnIcon color="info" />
                        </Box>
                        <Box>
                          <Typography variant="caption" color="#8E8E8E">
                            {item.salary}{" "}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box></Box>
                    <Box>
                      <Button>
                        {" "}
                        <GpsFixedIcon
                          sx={{
                            color: "#616161",
                            marginRight: "10px",
                            marginLeft: "10px",
                          }}
                          color="info"
                        />
                        <Typography variant="button" sx={{ color: "#616161" }}>
                          Follow{" "}
                        </Typography>
                      </Button>
                    </Box>
                    <Box sx={{ marginLeft: "40px" }}>
                      <Button variant="outlined" sx={{ borderRadius: "13px" }}>
                        <Typography variant="button" sx={{ color: "#616161" }}>
                          see more{" "}
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
