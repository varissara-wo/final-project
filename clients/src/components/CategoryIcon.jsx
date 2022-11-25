import React from "react";
import FactoryIcon from "@mui/icons-material/Factory";
import BalanceIcon from "@mui/icons-material/Balance";
import SchoolIcon from "@mui/icons-material/School";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

//วิธีใช้ 1.import { CategoryIcon } from "../CategoryIcon";
//2. <CategoryIcon categoryName={ชื่อ category} />

export const CategoryIcon = (props) => {
  const { categoryName } = props;

  if (categoryName == "Manufacturing") {
    return (
      <FactoryIcon
        sx={{
          marginRight: "6px",
        }}
      />
    );
  } else if (categoryName == "Legal") {
    return (
      <BalanceIcon
        sx={{
          marginRight: "6px",
        }}
      />
    );
  } else if (categoryName == "Education") {
    return (
      <SchoolIcon
        sx={{
          marginRight: "6px",
        }}
      />
    );
  } else if (categoryName == "Goverment") {
    return (
      <AccountBalanceIcon
        sx={{
          marginRight: "6px",
        }}
      />
    );
  } else if (categoryName == "Sales") {
    return (
      <AutoGraphIcon
        sx={{
          marginRight: "6px",
        }}
      />
    );
  }
};
