import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import { JobPost } from "./Recruiter/JobPost.jsx";
import JobPostCondidates from "./Recruiter/JobPostCondidates.jsx";
import CreateJob from "./Recruiter/CreateJob.jsx";
import RecruiterProfile from "./Recruiter/RecruiterProfile.jsx";

const AuthenticatedRecruiter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="recruiter/jobpost" element={<JobPost />}></Route>
        <Route path="recruiter/createjob" element={<CreateJob />}></Route>
        <Route path="recruiter/profile" element={<RecruiterProfile />}></Route>
        <Route
          path="recruiter/jobpost/candidate/:postId"
          element={<JobPostCondidates />}
        ></Route>
      </Routes>
    </ThemeProvider>
  );
};
export default AuthenticatedRecruiter;
