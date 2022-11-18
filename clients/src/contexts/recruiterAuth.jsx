import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthRecruiterContext = React.createContext();

function AuthRecruiterProvider(props) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  const login = async (data) => {
    const result = await axios.post(
      "http://localhost:4000/login_recruiter",
      data
    );
    const token = result.data.token;
    localStorage.setItem("token", token);
    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    navigate("/Recruiter");
  };

  const logout = () => {
    localStorage.removeItem("token")
    setState({ ...state, user: null })
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (

    <AuthRecruiterContext.Provider
      value={{ state, login, logout, isAuthenticated }}>
      {props.children}
    </AuthRecruiterContext.Provider>
  );


}



const useAuth = () => React.useContext(AuthRecruiterContext);

export { AuthRecruiterProvider, useAuth };
