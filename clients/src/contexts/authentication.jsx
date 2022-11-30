import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const navigate = useNavigate();
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [validate, setValidate] = useState("");
  const [emailValid, setEmailvalid] = useState("");
  const [passwordValid, setPasswordvalid] = useState("");
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });

  const getUserData = async () => {
    console.log("hi");
    const token = localStorage.getItem("token");
    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    setIsUserLoading(false);
  };

  const recruiterLogin = async (data) => {
    try {
      const result = await axios.post(
        "http://localhost:4000/login_recuiter",
        data
      );

      const token = result.data.token;
      localStorage.setItem("token", token);
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken });
      navigate("/recruiter/jobpost");
    } catch (err) {
      const message = err.response.data.message;
      if (message === "This E-mail not found") {
        setPasswordvalid("");
        setEmailvalid(message);
      } else {
        setEmailvalid("");
        setPasswordvalid(message);
      }
      // return Promise.reject(err);
    }
  };

  const professionalLogin = async (data) => {
    try {
      const result = await axios.post(
        "http://localhost:4000/login_professional",
        data
      );
      const token = result.data.token;
      localStorage.setItem("token", token);
      const userDataFromToken = jwtDecode(token);
      setState({ ...state, user: userDataFromToken });
      navigate("/findjobs");
    } catch (err) {
      const message = err.response.data.message;
      if (message === "This E-mail not found") {
        setPasswordvalid("");
        setEmailvalid(message);
      } else {
        setEmailvalid("");
        setPasswordvalid(message);
      }
      // return Promise.reject(err);
      // setValidate(err.response.data.message);
    }
  };

  // if (result.response.data.message) {
  //   console.log(result.response.data.message);
  //   setValidate(result.response.data.message);
  // }

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
        validate,
        passwordValid,
        emailValid,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
