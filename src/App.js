import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindJobs from "./pages/FindJobs.jsx";
import HomePage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Auth from "./pages/Auth.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/findjobs" element={<FindJobs />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
