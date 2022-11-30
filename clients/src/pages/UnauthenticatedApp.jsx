import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme.js";
import HomePage from "./Homepage.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import ErrorPage from "./ErrorPage.jsx";

const UnauthenticatedApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<ErrorPage />}></Route>
      </Routes>
    </ThemeProvider>
  );
};

export default UnauthenticatedApp;
