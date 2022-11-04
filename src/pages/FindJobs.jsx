import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Input, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import LogoutIcon from "@mui/icons-material/Logout";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import InputBase from "@mui/material/InputBase";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import BungalowIcon from "@mui/icons-material/Bungalow";
import { data } from "./datamock/data.js";
import Link from "@mui/material/Link";
const Buttonstyle = styled(Button)(({ theme }) => ({
  fontFamily: "var(--inter-font)",
  fontWeight: "500",
  fontSize: "14px",
  textTransform: "none",
  color: "primary.main",
}));

const Textlist = styled(ListItemText)(({ theme }) => ({
  fontFamily: "var(--inter-font)",
  fontWeight: "500",
  fontSize: "16px",
  color: "#373737",
}));

const Textcap = styled(ListItemText)(({ theme }) => ({
  fontFamily: "var(--inter-font)",
  fontWeight: "400",
  fontSize: "12px",
  color: "#616161",
}));
const Textinput = styled(Autocomplete)(({ theme }) => ({
  width: "280px",
  "& .css-uyzgbr-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "280px",
    height: "40px",
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: "2px solid #F48FB1",
  },
  height: "60px",
  color: "primary focused",
}));
const Textseacrh = styled(TextField)(({ theme }) => ({
  "& .css-1v0e5r1-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "480px",
    height: "40px",
  },
  "& .css-pmic0h-MuiFormControl-root-MuiTextField-root .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input":
    { width: "480px" },
  height: "60px",
  color: "primary focused",
}));
const Textseacrh1 = styled(TextField)(({ theme }) => ({
  "& .css-1v0e5r1-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "120px",
    height: "40px",
  },
  height: "60px",
  color: "primary focused",
}));
const Textseacrh2 = styled(TextField)(({ theme }) => ({
  "& ..css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
    width: "100px",
    height: "40px",
  },
  "& .css-pmic0h-MuiFormControl-root-MuiTextField-root .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input":
    { width: "480px" },
  height: "60px",
  color: "primary focused",
}));
const options = ["Technology", "science", "Accounting", "engineering"];
const options1 = ["Fulltime", "Partime", "Internship"];

const TextButtonStyled = styled(ListItemText)(() => ({
  fontFamily: "var(--inter-font)",
  fontWeight: "400",
  fontSize: "16px",
  color: "#616161",
  marginLeft: "10px",
  "&.Mui-selected": {
    color: "#373737",
  },
}));
const IconBoxStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "22px",
  height: "22px",
}));
const SidebarButtonStyled = styled(ListItemButton)(() => ({
  "&.Mui-selected": {
    backgroundColor: "#F5F5F6",
  },
}));
const GithubProfileStyled = styled(ListItemButton)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "2px 0 2px 0",
  width: "100%",
}));

const FindJobs = () => {
  const [value, setValue] = React.useState("Select a category");
  const [inputValue, setInputValue] = React.useState("");
  const [value1, setValue1] = React.useState("Select a type");
  const [inputValue1, setInputValue1] = React.useState("");
  const [number, setNumber] = useState(0);
  const [search, setSearch] = useState("");
  const inputchange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };
  const changenum = (event) => {
    setNumber(data1.length);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const data1 = data;
  return (
    <Box
      className="findjobs-container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      {/*------------------------------------- Start Sidebar -------------------------------------*/}
      <Box
        className="sidebar-container"
        sx={{
          width: "240px",
          //maxWidth: "240px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "background.default",
          height: "100vh",
        }}
      >
        <Box className="sidebar-top" sx={{ width: "100%" }}>
          <Box
            className="getthatjoblogo-box"
            sx={{
              margin: "32px 16px 32px 16px",
              width: "136px",
              cursor: "pointer",
            }}
          >
            <img src="pic/gtj-logo-1.svg" alt="getthatjoblogo" />
          </Box>
          <Box>
            <List>
              <SidebarButtonStyled
                href="#find-that-Job"
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <IconBoxStyled>
                  <img src="pic/find.svg" alt="find that job" />
                </IconBoxStyled>
                <TextButtonStyled sx={{}}>Find that Job</TextButtonStyled>
              </SidebarButtonStyled>

              <SidebarButtonStyled
                href="#your-applications"
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <IconBoxStyled>
                  <img src="pic/doc.svg" alt="your applications" />
                </IconBoxStyled>
                <TextButtonStyled>Your applications</TextButtonStyled>
              </SidebarButtonStyled>

              <SidebarButtonStyled
                href="#following"
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <IconBoxStyled>
                  <img src="pic/gps.svg" alt="following" />
                </IconBoxStyled>
                <TextButtonStyled>Following</TextButtonStyled>
              </SidebarButtonStyled>

              <SidebarButtonStyled
                component="a"
                href="#profile"
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <IconBoxStyled>
                  <img src="pic/personal.svg" alt="profile" />
                </IconBoxStyled>
                <TextButtonStyled>Profile</TextButtonStyled>
              </SidebarButtonStyled>

              <SidebarButtonStyled component="a" href="/">
                <IconBoxStyled>
                  <img src="pic/LogoutIcon.svg" alt="log out" />
                </IconBoxStyled>
                <TextButtonStyled>Log out</TextButtonStyled>
              </SidebarButtonStyled>
            </List>
          </Box>
        </Box>

        <Box
          className="sidebar-footer"
          sx={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Typography
            variant="caption"
            color={"secondary"}
            sx={{ margin: "0 0 12px 16px" }}
          >
            © 2022 - Get That Job
          </Typography>

          <ListItem disablePadding sx={{ margin: "0 0 12px 16px" }}>
            <Typography
              variant="caption"
              color={"secondary"}
              sx={{ maxWidth: "125px" }}
            >
              Codeable - Cohort X Final Project
            </Typography>
          </ListItem>

          <ListItem disablePadding sx={{ margin: "0 0 5px 16px" }}>
            <Typography variant="caption" color={"secondary"}>
              Build with
            </Typography>
            <FavoriteIcon
              sx={{ fontSize: 12, margin: "0 5px 0 5px" }}
              color={"error"}
            />
            <Typography variant="caption" color={"secondary"}>
              by:
            </Typography>
          </ListItem>

          <GithubProfileStyled href="https://github.com/Hohokz" target="_blank">
            <GitHubIcon
              sx={{ width: "14px", height: "14px", margin: "0 0 0 16px" }}
            />
            <Typography
              variant="caption"
              color={"secondary"}
              sx={{ marginLeft: "5px" }}
            >
              Apiwat Singharach
            </Typography>
          </GithubProfileStyled>
          <GithubProfileStyled
            href="https://github.com/MilesNR"
            target="_blank"
          >
            <GitHubIcon
              sx={{ width: "14px", height: "14px", margin: "0 0 0 16px" }}
            />
            <Typography
              variant="caption"
              color={"secondary"}
              sx={{ marginLeft: "5px" }}
            >
              Nattakit Rattanakeha
            </Typography>
          </GithubProfileStyled>
          <GithubProfileStyled
            href="https://github.com/thanakornboonlar"
            target="_blank"
          >
            <GitHubIcon
              sx={{ width: "14px", height: "14px", margin: "0 0 0 16px" }}
            />
            <Typography
              variant="caption"
              color={"secondary"}
              sx={{ marginLeft: "5px" }}
            >
              Thanakorn Boonlar
            </Typography>
          </GithubProfileStyled>
          <GithubProfileStyled
            href="https://github.com/varissara-wo"
            target="_blank"
          >
            <GitHubIcon
              sx={{ width: "14px", height: "14px", margin: "0 0 0 16px" }}
            />
            <Typography
              variant="caption"
              color={"secondary"}
              sx={{ marginLeft: "5px" }}
            >
              Varissara Wongprasit
            </Typography>
          </GithubProfileStyled>
          <GithubProfileStyled
            href="https://github.com/cholanuchkorn123"
            target="_blank"
          >
            <GitHubIcon
              sx={{ width: "14px", height: "14px", margin: "0 0 0 16px" }}
            />
            <Typography
              variant="caption"
              color={"secondary"}
              sx={{ marginLeft: "5px" }}
            >
              Cholanuch Kasemtanakitti
            </Typography>
          </GithubProfileStyled>
          <Box sx={{ margin: "10px 0 32px 0", width: "100%" }}>
            <Typography
              variant="caption"
              color={"secondary"}
              sx={{ margin: "10px 0 5px 16px" }}
            >
              Source code:
            </Typography>
            <GithubProfileStyled href="https://reactjs.org/" target="_blank">
              <Box
                className="getthatjoblogo-box"
                sx={{
                  margin: "0 0 0 16px",
                  width: "14px",
                  height: "14px",
                }}
              >
                <img src="pic/react.svg" alt="getthatjoblogo" />
              </Box>

              <Typography
                variant="caption"
                color={"secondary"}
                sx={{ marginLeft: "5px" }}
              >
                React Responsive SPA
              </Typography>
            </GithubProfileStyled>
          </Box>
        </Box>
      </Box>
      {/*------------------------------------- End Sidebar -------------------------------------*/}

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
          <Typography
            variant="h6"
            sx={{ maginTop: "10px", marginLeft: "5px", marginBottom: "10px" }}
          >
            {" "}
            {number} jobs for you
          </Typography>
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
                          }}
                        >
                          <BungalowIcon />

                          <Typography
                            sx={{ marginLeft: "10px", marginTop: "5px" }}
                            variant="caption"
                          >
                            {" "}
                            {item.category}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ width: "180px", height: "28px" }}
                          className="mappingdata"
                        >
                          <Typography variant="h6">The Job Title </Typography>
                        </Box>
                        <Box sx={{ width: "170px", height: "28px" }}>
                          <Typography variant="subtitle2">
                            {item.name}
                          </Typography>
                        </Box>
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
                            <CalendarMonthIcon />
                          </Box>
                          <Box
                            sx={{ marginBottom: "5px", marginRight: "10px" }}
                          >
                            <Typography variant="caption">
                              {item.type}{" "}
                            </Typography>{" "}
                          </Box>
                          <Box>
                            <MonetizationOnIcon />
                          </Box>
                          <Box>
                            <Typography variant="caption">
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
                          />
                          <Typography
                            variant="button"
                            sx={{ color: "#616161" }}
                          >
                            Follow{" "}
                          </Typography>
                        </Button>
                      </Box>
                      <Box sx={{ marginLeft: "40px" }}>
                        <Button
                          variant="outlined"
                          sx={{ borderRadius: "13px" }}
                        >
                          <Typography
                            variant="button"
                            sx={{ color: "#616161" }}
                          >
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
    </Box>
  );
};

export default FindJobs;
