import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const navigate = useNavigate();
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    setIsUserLoading(false);
  };

  const recruiterLogin = async (data) => {
    const result = await axios.post(
      "http://localhost:4000/login_recuiter",
      data
    );
    const token = result.data.token;
    localStorage.setItem("token", token);
    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    navigate("/recruiter/jobpost");
  };

  const professionalLogin = async (data) => {
    const result = await axios.post(
      "http://localhost:4000/login_professional",
      data
    );
    const token = result.data.token;
    localStorage.setItem("token", token);
    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    navigate("/findjobs");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{
        state,
        recruiterLogin,
        professionalLogin,
        logout,
        isAuthenticated,
        getUserData,
        isUserLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
