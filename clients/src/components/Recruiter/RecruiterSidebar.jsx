import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import {
  TextButtonStyled,
  IconBoxStyled,
  SidebarButtonStyled,
  GithubProfileStyled,
} from "../Professional/styles";
import { Favorite, GitHub } from "@mui/icons-material";

const RecruiterSidebar = (props) => {
  const { logout } = useAuth();
  const index = Number(props.selectedIndex);
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(index);

  const handleListItemClick = (path, index) => {
    setSelectedIndex(index);
    navigate(path);
  };
  useEffect(() => {}, [index]);
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
            <img
              src="https://res.cloudinary.com/dgzvwxecn/image/upload/v1668954135/gtj-logo_gitfpb.png"
              alt="getthatjoblogo"
            />
          </Box>
          {/*------------------------------ End logo ------------------------------*/}
          <Box>
            <List>
              <SidebarButtonStyled
                selected={selectedIndex === 0}
                onClick={() => handleListItemClick("/recruiter/jobpost", 0)}
              >
                <IconBoxStyled>
                  <img
                    src="https://res.cloudinary.com/dgzvwxecn/image/upload/v1669049357/Group_7_qroyqv.svg"
                    alt="job posting"
                  />
                </IconBoxStyled>
                <TextButtonStyled>Job Postings</TextButtonStyled>
              </SidebarButtonStyled>
              {/*------------------------------ End jobposting ------------------------------*/}
              <SidebarButtonStyled
                selected={selectedIndex === 1}
                onClick={(event) =>
                  handleListItemClick("/recruiter/createjob", 1)
                }
              >
                <IconBoxStyled>
                  <img
                    src="https://res.cloudinary.com/dgzvwxecn/image/upload/v1669049356/Group_8_tyrqa1.svg"
                    alt="Createnewjob"
                  />
                </IconBoxStyled>
                <TextButtonStyled>Create New Job</TextButtonStyled>
              </SidebarButtonStyled>
              {/*------------------------------ End createpostjob ------------------------------*/}

              <SidebarButtonStyled
                component="a"
                selected={selectedIndex === 2}
                onClick={(event) =>
                  handleListItemClick("/recruiter/profile", 2)
                }
              >
                <IconBoxStyled>
                  <img
                    src="https://res.cloudinary.com/dgzvwxecn/image/upload/v1668954324/Group_4_erymra.svg"
                    alt="profile"
                  />
                </IconBoxStyled>
                <TextButtonStyled>Profile</TextButtonStyled>
              </SidebarButtonStyled>
              {/*------------------------------ End porfile ------------------------------*/}
              <SidebarButtonStyled
                component="a"
                onClick={() => {
                  logout();
                }}
              >
                <IconBoxStyled>
                  <img
                    src="https://res.cloudinary.com/dgzvwxecn/image/upload/v1668954324/Group_5_qxgp4r.svg"
                    alt="log out"
                  />
                </IconBoxStyled>
                <TextButtonStyled>Log out</TextButtonStyled>
              </SidebarButtonStyled>
            </List>
          </Box>
        </Box>
        {/*------------------------------ End logout ------------------------------*/}

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
                <img
                  src="https://res.cloudinary.com/dgzvwxecn/image/upload/v1668954466/Group_6_fk3ugd.svg"
                  alt="getthatjoblogo"
                />
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

export default RecruiterSidebar;
