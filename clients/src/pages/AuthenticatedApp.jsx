import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindJobs from "./FindJobs.jsx";
import HomePage from "./Homepage.jsx";
import Login from "./Login.jsx";
import Auth from "./Auth.jsx";
import { Findjobssearch } from "./Findjobscontent.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import { Recruiter } from "./Recruiter.jsx";
function AuthenticationApp() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/findjobs" element={<FindJobs />}></Route>
          {/* -------------------------mock recruiter createpost------------------ */}
          <Route path="/Recruiter" element={<Recruiter />}></Route>
          {/* -------------------------mock recruiter createpost------------------ */}
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AuthenticationApp;
