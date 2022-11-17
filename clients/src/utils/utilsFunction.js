import React from "react";
import {
  Factory,
  Balance,
  School,
  AccountBalance,
  AutoGraph,
} from "@mui/icons-material";

export const calSalary = (num) => {
  let a = num / 1000;
  return Math.floor(a);
};

export const iconCategory = (name) => {
  if (name === "Manufacturing") {
    return (
      <Factory
        sx={{
          marginRight: "6px",
          color: "#8E8E8E",
          width: "18px",
          height: "18px",
        }}
      />
    );
  } else if (name === "Legal") {
    return (
      <Balance
        sx={{
          marginRight: "6px",
          color: "#8E8E8E",
          width: "18px",
          height: "18px",
        }}
      />
    );
  } else if (name === "Education") {
    return (
      <School
        sx={{
          marginRight: "6px",
          color: "#8E8E8E",
          width: "18px",
          height: "18px",
        }}
      />
    );
  } else if (name === "Goverment") {
    return (
      <AccountBalance
        sx={{
          marginRight: "6px",
          color: "#8E8E8E",
          width: "18px",
          height: "18px",
        }}
      />
    );
  } else if (name === "Sales") {
    return (
      <AutoGraph
        sx={{
          marginRight: "6px",
          color: "#8E8E8E",
          width: "18px",
          height: "18px",
        }}
      />
    );
  }
};
