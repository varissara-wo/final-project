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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  backgroundColor: "#F5F5F6",
  marginLeft: 0,
  width: "420px",
  height: "40px",
}));
const options = ["abc", "def"];
const options1 = ["434", "d43434"];

const FindJobs = () => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [value1, setValue1] = React.useState(options[0]);
  const [inputValue1, setInputValue1] = React.useState("");

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
      <Box
        className="sidebar-container"
        sx={{
          width: "240px",
          minWidth: "240px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "background.default",
          height: "900px",
        }}
      >
        <Box className="sidebar-menu" sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              margin: "32px 16px 32px 16px",
              width: "136px",
            }}
          >
            <img src="pic/gtj-logo-1.svg" alt="getthatjoblogo" />
          </Box>
          <List>
            <ListItem disablePadding sx={{ width: "100%" }}>
              <ListItemButton
                component="a"
                href="#simple-list"
                sx={{ width: "100%" }}
              >
                <ListItemIcon sx={{ width: "100%" }}>
                  <SearchIcon sx={{ marginTop: "5px" }} />
                  <Textlist sx={{}} primary="Find that job" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <DescriptionIcon sx={{ marginTop: "5px" }} />
                  <Textlist
                    sx={{ marginLeft: "10px" }}
                    primary="Your applications"
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <GpsFixedIcon sx={{ marginTop: "5px" }} />
                  <Textlist sx={{ marginLeft: "10px" }} primary="Following" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <PersonIcon sx={{ marginTop: "5px" }} />
                  <Textlist sx={{ marginLeft: "10px" }} primary="Profile" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img src="pic/LogoutIcon.svg" />
                  </Box>
                  <Textlist sx={{ marginLeft: "8px" }} primary="Log out" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box
          className="sidebar-footer"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <List sx={{ marginLeft: "16px" }}>
            <ListItem disablePadding sx={{ margin: "0 0 12px 0" }}>
              <Typography variant="caption" color={"secondary"}>
                © 2022 - Get That Job
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ margin: "0 0 12px 0" }}>
              <Typography
                variant="caption"
                color={"secondary"}
                sx={{ maxWidth: "125px" }}
              >
                Codeable - Cohort X Final Project
              </Typography>
            </ListItem>
            <ListItem disablePadding sx={{ margin: "0 0 5px " }}>
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
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#simple-list"
                sx={{ padding: "0" }}
              >
                <ListItemIcon>
                  <GitHubIcon />
                  <Textlist sx={{ marginLeft: "10px" }} secondary="Apiwat" />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <Typography variant="caption">Source code:</Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="caption">Ruby on Rails REST API</Typography>
            </ListItem>
            <ListItem disablePadding>
              <Typography variant="caption">React Responsive SPA</Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box>
        <Typography>
          search by job title or company name
          <Search
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MonetizationOnIcon />
                </InputAdornment>
              ),
            }}
          >
            <InputBase placeholder="manufacturing" />
          </Search>
        </Typography>
      </Box>
      <Typography>
        Category
        <Autocomplete
          size="small"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: "280px", height: "20px", borderRadius: "8px" }}
          renderInput={(params) => (
            <TextField {...params} label="Select a category" />
          )}
        />
      </Typography>
      <Typography>
        Type
        <Autocomplete
          size="small"
          value={value1}
          onChange={(event, newValue) => {
            setValue1(newValue);
          }}
          inputValue={inputValue1}
          onInputChange={(event, newInputValue) => {
            setInputValue1(newInputValue);
          }}
          id="controllable-states-demo"
          options={options1}
          sx={{ width: "280px", height: "20px", borderRadius: "8px" }}
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
        Salary renge
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <TextField
            id="outlined-basic"
            label="min"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MonetizationOnIcon />
                </InputAdornment>
              ),
            }}
          >
            {" "}
          </TextField>
          <HorizontalRuleIcon />

          <TextField
            id="outlined-basic"
            label="max"
            variant="outlined"
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
  );
};

export default FindJobs;
