import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisContext = React.createContext();

function RegisProvider(props) {
  const [isProfessionalExist, setProfessionalExist] = useState("");
  const [isRecruiterExist, setRecruiterExist] = useState("");
  const navigate = useNavigate();

  const isProfessionalEmailExist = async (email) => {
    const result = await axios.get(
      `http://localhost:4000/professional/users/exists/${email}`
    );
    console.log(`http://localhost:4000/professional/users/exists/${email}`);
    setProfessionalExist(result.data.isEmailExist);
  };

  const isRecruiterEmailExist = async (email) => {
    const result = await axios.get(
      `http://localhost:4000/recruiter/users/exists/${email}`
    );

    setRecruiterExist(result.data.isEmailExist);
  };

  const registerProfessional = async (data) => {
    await axios.post("http://localhost:4000/professional", data);
    navigate("/");
  };

  const registerRecruiter = async (data) => {
    console.log(data);
    await axios.post("http://localhost:4000/recruiter", data);
    navigate("/");
  };

  return (
    <RegisContext.Provider
      value={{
        isProfessionalExist,
        isProfessionalEmailExist,
        isRecruiterEmailExist,
        isRecruiterExist,
        registerProfessional,
        registerRecruiter,
      }}
    >
      {props.children}
    </RegisContext.Provider>
  );
}

const useRegis = () => React.useContext(RegisContext);

export { RegisProvider, useRegis };
