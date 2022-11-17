import React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import usePosts from "../../hooks/usePost";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import InputAdornment from "@mui/material/InputAdornment";
import ImageListItem from "@mui/material/ImageListItem";
import TextField from "@mui/material/TextField";
import BungalowIcon from "@mui/icons-material/Bungalow";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FactoryIcon from "@mui/icons-material/Factory";
import BalanceIcon from "@mui/icons-material/Balance";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
export function Following() {
  const [nums, setNums] = useState();
  const { follow, getFollow, numberOfJobs } = usePosts();
  const length = () => {
    setNums();
  };

  const tilte = (t) => {
    if (t.length < 5) {
      return (
        <>
          <Typography variant="h6"> {t}</Typography>
        </>
      );
    } else {
      return (
        <>
          <Typography
            sx={{
              fontFamily: "var(--montserrat-font)",
              fontWeight: "500",
              fontSize: "17px",
              marginTop: "5px",
            }}
          >
            {" "}
            {t}
          </Typography>
        </>
      );
    }
  };
  const iconCategory = (name) => {
    if (name == "Manufacturing") {
      return <FactoryIcon color="info" />;
    } else if (name == "Legal") {
      return <BalanceIcon color="info" />;
    } else if (name == "Education") {
      return <SchoolIcon color="info" />;
    } else if (name == "Goverment") {
      return <AccountBalanceIcon sx={{}} />;
    } else if (name == "Sales") {
      return <AutoGraphIcon color="info" />;
    }
  };
  const calSalary = (num) => {
    let a = num / 1000;
    return a;
  };
  useEffect(() => {
    getFollow(3);
  }, []);
  return (
    <>
      <Box
        sx={{ backgroundColor: "#F5F5F6", width: "1500px", height: "100vh" }}
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
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            Following
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            You are following {follow.length} jobs
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
            {follow.map((item, itemIndex) => {
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
                          src={`${item.logo_url}?w=75&fit=crop&auto=format`}
                          srcSet={`${item.logo_url}?w=75&fit=crop&auto=format&dpr=2 2x`}
                          alt="logo"
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
                          {iconCategory(item.name)}

                          <Typography
                            variant="caption"
                            sx={{ marginLeft: "10px", marginTop: "5px" }}
                            color="#8E8E8E"
                          >
                            {item.name}
                          </Typography>
                        </Box>
                        {/*------------------------------------- title -------------------------------------*/}
                        <Box
                          sx={{ width: "180px", height: "28px" }}
                          className="title"
                        >
                          {tilte(item.job_title)}
                        </Box>
                        <Box sx={{ width: "170px", height: "28px" }}>
                          <Typography variant="subtitle2" color="#8E8E8E">
                            {item.company_name}
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
                              {calSalary(item.min_salary)}k-
                              {calSalary(item.max_salary)}k
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
    </>
  );
}
