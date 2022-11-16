import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider(props) {
    const navigate = useNavigate();
    const [state, setState] = useState({
        loading: null,
        error: null,
        user: null,
    });

    const login = async (data) => {
        await axios.post("http://localhost:4000/login_recuiter", data)
        const token = result.data.token
        localStorage.set("token", token)
        const userDataFromToken = jwtDecode(token);
        setState({ ...state, user: userDataFromToken })
        navigate("/findjobs");
    };

    const isAuthenticated = Boolean(localStorage.getItem("token"));

    return (
        <AuthContext.Provider
            value={{
                state,
                login,
                logout,
                register,
                isAuthenticated
            }}>

            {props.children}

        </AuthContext.Provider>
    );

}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };