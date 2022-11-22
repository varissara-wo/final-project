import { Routes, Route } from "react-router-dom";
import FindJobs from "./Professional/FindJobs.jsx";
import HomePage from "./Homepage.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Applications from "./Professional/Applications.jsx";
import JobDetail from "./Professional/JobDetail.jsx";
import ApplicationForm from "./Professional/ApplicationForm.jsx";
import ProfessionalProfile from "./Professional/ProfessionalProfile.jsx";
import Following from "./Professional/Following.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import { JobPost } from "./Recruiter/JobPost.jsx";
import CreateJob from "./Recruiter/CreateJob.jsx";
import RecruiterProfile from "./Recruiter/RecruiterProfile.jsx";

function AuthenticationApp() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* ------------------------professional part------------------ */}
        <Route path="/findjobs" element={<FindJobs />}></Route>
        <Route path="/findjobs/:jobid" element={<JobDetail />}></Route>
        <Route path="/applications" element={<Applications />}></Route>
        <Route
          path="/applications/:jobid"
          element={<ApplicationForm />}
        ></Route>
        <Route path="/following" element={<Following />}></Route>
        <Route path="/profile" element={<ProfessionalProfile />}></Route>-
        {/* ------------------------mock recruiter createpost------------------ */}
        <Route path="recruiter/jobpost" element={<JobPost />}></Route>
        <Route path="recruiter/createjob" element={<CreateJob />}></Route>
        <Route path="recruiter/profile" element={<RecruiterProfile />}></Route>
        {/* -------------------------mock recruiter createpost------------------ */}
        <Route path="/auth" element={<Register />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default AuthenticationApp;
