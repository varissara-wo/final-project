import axios from "axios";
import React, { useState } from "react";

const RegisContext = React.createContext();

function RegisProvider(props) {
  const [isProfessionalExist, setProfessionalExist] = useState("");
  const [isRecruiterExist, setRecruiterExist] = useState("");

  const isProfessionalEmailExist = async (email) => {
    const result = await axios.get(
      `http://localhost:4000/professional/users/exists/${email}`
    );

    setProfessionalExist(result.data.isEmailExist);
  };

  const isRecruiterEmailExist = async (email) => {
    const result = await axios.get(
      `http://localhost:4000/recruiter/users/exists/${email}`
    );

    setRecruiterExist(result.data.isEmailExist);
  };

  return (
    <RegisContext.Provider
      value={{
        isProfessionalExist,
        isProfessionalEmailExist,
        isRecruiterEmailExist,
        isRecruiterExist,
      }}
    >
      {props.children}
    </RegisContext.Provider>
  );
}

const useRegis = () => React.useContext(RegisContext);

export { RegisProvider, useRegis };
