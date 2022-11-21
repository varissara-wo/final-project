import React from "react";
import NavBox from "../components/Navbar.jsx";
import Profile from "../components/Homepage/Profile.jsx";
import { Typography, Button, Divider, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const profile = [
    {
      name: "Varissara Wongprasit",
      github: "https://github.com/varissara-wo",
      linkedin: "https://www.linkedin.com/in/varissara-wongprasit-108945230/",
      img: "images/phone.svg",
    },
    {
      name: "Apiwat Singharach",
      github: "https://github.com/Hohokz",
      linkedin: "https://www.linkedin.com/in/apiwat-singharach/",
      img: "images/Apiwat_Avatar.png",
    },
    {
      name: "Cholanuch Kasemtanakitti",
      github: "https://github.com/cholanuchkorn123",
      linkedin: "https://www.linkedin.com/in/cholanuch-kasemtanakitti-8b3202244/",
      img: "images/korn-avatar.png",
    },
    {
      name: "Thanakorn Boonlar",
      github: "https://github.com/thanakornboonlar",
      linkedin: "https://www.linkedin.com/in/bestball/",
      img: "images/ball-avatar.png",
    },
    {
      name: "Nattakit Rattanakeha",
      github: "https://github.com/MilesNR",
      linkedin: "https://www.linkedin.com/in/nattakit-rattanakeha-746b39248/",
      img: "images/smile-avatar.png",
    },
  ];
  return (
    <>
      <Box>
        <NavBox />
      </Box>
      <Box width="auto">
        <Box
          margin="0px"
          marginTop="64px"
          width="auto"
          height="897px"
          sx={{
            display: "flex",
            backgroundColor: "#F5F5F6",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "auto",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignContent: "center",
              paddingTop: "32px",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                component="h1"
                color="warning"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                The place where
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                color="warning"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                you get &nbsp;
                <Typography
                  variant="h2"
                  component="span"
                  color="primary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  that
                </Typography>
                &nbsp; job
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "auto",
                justifyContent: "center",
                paddingTop: "32px",
              }}
            >
              <Typography
                variant="h5"
                component="p"
                color="#000000"
                sx={{
                  display: "flex",
                  width: "720px",
                  textAlign: "center",
                }}
              >
                With our Machine Learning algorithm you will get that job in no
                time. We promise you! Just give us the money and we will take
                care of it.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "32px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                fontFamily="button"
                onClick={() => navigate("/auth")}
                sx={{
                  display: "flex",
                  color: "#FFF",
                  borderColor: "primary",
                  width: "264px",
                  height: "56px",
                  margin: "10px",
                  borderRadius: "16px",
                }}
              >
                create an account now
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "32px",
              }}
            >
              <img src="images/Peoplegroup.svg" alt="woman" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            widows: "auto",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "55%",
              backgroundColor: "error.main",
              padding: "64px 120px",
            }}
          >
            <Typography
              variant="h3"
              component="p"
              color="primary.contrastText"
              sx={{
                marginBottom: "24px",
              }}
            >
              Find your next job
            </Typography>
            <Typography
              variant="findYouJob"
              component="p"
              color="primary.contrastText"
              sx={{
                marginBottom: "40px",
                width: "80%",
                fontSize: "24px",
              }}
            >
              Our Machine learning algorithm is so good that it’s even illegal
              in some countries. Join us to use our barelly legal algorithm that
              is actually a group of interns that work on our basement.
            </Typography>
            <Typography
              variant="findYouJob"
              component="p"
              color="primary.contrastText"
              sx={{
                width: "80%",
                fontSize: "24px",
              }}
            >
              We have a job for you, no matter your background or previous
              experience. Is sending random memes through chat your only skill?
              That’s ok, we got you, our Rock Star Meme Curator role is here for
              you.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "35%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="images/loupe.svg" alt="loupe" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "auto",
            height: "490px",
            backgroundColor: "#E5E5E5",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            color="primary"
            sx={{
              display: "flex",
              marginTop: "140px",
              justifyContent: "center",
            }}
          >
            Meet the team
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "24px",
              gap: "80px",
            }}
          >
            {/* Picture your team */}
            {profile.map((profile) => {
              return (
                <Profile
                  name={profile.name}
                  github={profile.github}
                  linkedin={profile.linkedin}
                  img={profile.img}
                />
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "75px",
              backgroundColor: "#E5E5E5",
            }}
          >
            <Divider
              sx={{
                display: "flex",
                width: "80%",
                borderColor: "#BF5F82",
              }}
            />
            <Box
              sx={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                display: "flex",
                marginTop: "18px",
                paddingBottom: "40px",
              }}
            >
              <Box>
                <Typography
                  variant="underLine"
                  component="span"
                  color="warning"
                >
                  © 202X - Get That Job
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="underLine"
                  component="span"
                  color="warning"
                  sx={{
                    display: "flex",
                    marginBottom: "5px",
                  }}
                >
                  Source Code
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingButton: "10px",
                  }}
                >
                  <Box>
                    <Typography
                      variant="underLine"
                      component="span"
                      color="warning"
                      sx={{
                        paddingLeft: "5px",
                        paddingRight: "5px",
                      }}
                    >
                      REST API with Node and Express
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", width: "200px" }}>
                    <img src="images/React.svg" alt="react icon" />
                    <Typography
                      variant="underLine"
                      component="span"
                      color="warning"
                      sx={{
                        paddingLeft: "5px",
                        paddingRight: "5px",
                      }}
                    >
                      React Responsive SPA
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="underLine"
                  component="span"
                  color="warning"
                >
                  Codeable - Cohort X Final Project
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Homepage;
