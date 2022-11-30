import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import HomePage from "./Homepage.jsx";
import FindJobs from "./Professional/FindJobs.jsx";
import JobDetail from "./Professional/JobDetail.jsx";
import Applications from "./Professional/Applications.jsx";
import ApplicationForm from "./Professional/ApplicationForm.jsx";
import Following from "./Professional/Following.jsx";
import ProfessionalProfile from "./Professional/ProfessionalProfile.jsx";
import jwtInterceptor from "../utils/jwtInterceptor";
const AuthenticatedProfessional = () => {
  jwtInterceptor();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/findjobs" element={<FindJobs />}></Route>
        <Route path="/findjobs/:jobid" element={<JobDetail />}></Route>
        <Route path="/applications" element={<Applications />}></Route>
        <Route
          path="/applications/:jobid"
          element={<ApplicationForm />}
        ></Route>
        <Route path="/following" element={<Following />}></Route>
        <Route path="/profile" element={<ProfessionalProfile />}></Route>
      </Routes>
    </ThemeProvider>
  );
};
export default AuthenticatedProfessional;
