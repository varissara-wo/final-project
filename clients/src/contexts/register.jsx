import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
const RegisContext = React.createContext();

function RegisProvider(props) {
  const navigate = useNavigate();
  const [isEmailExist, setEmailExist] = useState("");

  const isProfessionalEmailExist = async (email) => {
    const result = await axios.get(
      `http://localhost:4000/professional/users/exists/${email}`
    );

    setEmailExist(result.data.isEmailExist);
  };
  const Registerprofessional = async (data) => {
    console.log(data)
   
    await axios.post("http://localhost:4000/professional", data);
    // navigate("/");
  };
  return (
    <RegisContext.Provider value={{ isEmailExist, isProfessionalEmailExist ,Registerprofessional}}>
      {props.children}
    </RegisContext.Provider>
  );
}



const useRegis = () => React.useContext(RegisContext);

export { RegisProvider, useRegis ,};
