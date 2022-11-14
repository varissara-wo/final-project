import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindJobs from "./FindJobs.jsx";
import HomePage from "./Homepage.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";

function AuthenticationApp() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/findjobs" element={<FindJobs />}></Route>
        <Route path="/auth" element={<Register />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default AuthenticationApp;
