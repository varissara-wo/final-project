import React, { useState } from "react";
import { Typography, List, ListItem, Box } from "@mui/material";

import {
  TextButtonStyled,
  IconBoxStyled,
  SidebarButtonStyled,
  GithubProfileStyled,
} from "./styles.jsx";
import { Favorite, GitHub } from "@mui/icons-material";

const ProfessionalSidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Box position="fixed">
      <Box
        className="sidebar-container"
        sx={{
          width: "240px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "background.default",
          height: "100vh",
        }}
      >
        {/*------------------------------ Start Top Sidebar ------------------------------*/}
        <Box className="sidebar-top" sx={{ width: "100%", height: "100%" }}>
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
                href="/findjobs"
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
        {/*------------------------------ End Top Sidebar ------------------------------*/}

        {/*------------------------------ Start Footer Sidebar ------------------------------*/}
        <Box
          className="sidebar-footer"
          sx={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            height: "100%",
            maxHeight: "300px",
            marginBottom: "32px",
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
            <Favorite
              sx={{ fontSize: 12, margin: "0 5px 0 5px" }}
              color={"error"}
            />
            <Typography variant="caption" color={"secondary"}>
              by:
            </Typography>
          </ListItem>

          <GithubProfileStyled href="https://github.com/Hohokz" target="_blank">
            <GitHub
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
            <GitHub
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
            <GitHub
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
            <GitHub
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
            <GitHub
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
        {/*------------------------------ End Footer Sidebar ------------------------------*/}
      </Box>
    </Box>
  );
};

export default ProfessionalSidebar;
