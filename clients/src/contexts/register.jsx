import axios from "axios";
import React, { useState } from "react";

const RegisContext = React.createContext();

function RegisProvider(props) {
  const [isEmailExist, setEmailExist] = useState("");

  const isProfessionalEmailExist = async (email) => {
    const result = await axios.get(
      `http://localhost:4000/professional/users/exists/${email}`
    );

    setEmailExist(result.data.isEmailExist);
  };
  return (
    <RegisContext.Provider value={{ isEmailExist, isProfessionalEmailExist }}>
      {props.children}
    </RegisContext.Provider>
  );
}

const useRegis = () => React.useContext(RegisContext);

export { RegisProvider, useRegis };
