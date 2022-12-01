import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import { JobPost } from "./Recruiter/JobPost.jsx";
import { ShowJobPostings } from "../components/Recruiter/ShowJobPosting.jsx";
import CreateJob from "./Recruiter/CreateJob.jsx";
import RecruiterProfile from "./Recruiter/RecruiterProfile.jsx";
import ErrorPage from "./ErrorPage.jsx";
const AuthenticatedRecruiter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="recruiter/jobpost" element={<JobPost />}></Route>
        <Route path="recruiter/createjob" element={<CreateJob />}></Route>
        <Route path="recruiter/profile" element={<RecruiterProfile />}></Route>
        <Route
          path="recruiter/jobpost/candidate"
          element={<ShowJobPostings />}
        ></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
};
export default AuthenticatedRecruiter;
