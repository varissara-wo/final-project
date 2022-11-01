import { BrowserRouter, Routes, Route } from "react-router-dom";
import FindJobs from "./pages/FindJobs.jsx";
import HomePage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/findjobs" element={<FindJobs />}></Route>
    </Routes>
  </BrowserRouter>)

}

export default App;
