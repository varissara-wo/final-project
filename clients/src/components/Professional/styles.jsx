import { styled, Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import Autocomplete from "@mui/material/Autocomplete";
import ListItemText from "@mui/material/ListItemText";
export const Buttonstyle = styled(Button)(({ theme }) => ({
  fontFamily: "var(--inter-font)",
  fontWeight: "500",
  fontSize: "14px",
  textTransform: "none",
  color: "primary.main",
}));

export const Textlist = styled(ListItemText)(({ theme }) => ({
  fontFamily: "var(--inter-font)",
  fontWeight: "500",
  fontSize: "16px",
  color: "#373737",
}));

export const Textcap = styled(ListItemText)(({ theme }) => ({
  fontFamily: "var(--inter-font)",
  fontWeight: "400",
  fontSize: "12px",
  color: "#616161",
}));
export const Textinput = styled(Autocomplete)(({ theme }) => ({
  width: "280px",
  "& .css-uyzgbr-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "280px",
    height: "40px",
    backgroundColor: "#FFFFFF",
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: "2px solid #F48FB1",
  },
  height: "60px",
  color: "primary focused",
}));
export const Textseacrh = styled(TextField)(({ theme }) => ({
  "& .css-1v0e5r1-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "480px",
    height: "40px",
    backgroundColor: "#FFFFFF",
  },
  "& .css-pmic0h-MuiFormControl-root-MuiTextField-root .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input":
    { width: "480px" },
  height: "60px",
  color: "primary focused",
}));
export const Textseacrh1 = styled(TextField)(({ theme }) => ({
  "& .css-1v0e5r1-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "120px",
    height: "40px",
    backgroundColor: "#FFFFFF",
  },
  height: "60px",
  color: "primary focused",
}));
export const Textseacrh2 = styled(TextField)(({ theme }) => ({
  "& ..css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
    width: "100px",
    height: "40px",
  },
  "& .css-pmic0h-MuiFormControl-root-MuiTextField-root .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input":
    { width: "480px" },
  height: "60px",
  color: "primary focused",
}));

export const TextButtonStyled = styled(ListItemText)(() => ({
  fontFamily: "var(--inter-font)",
  fontWeight: "400",
  fontSize: "16px",
  color: "#616161",
  marginLeft: "10px",
  "&.Mui-selected": {
    color: "#373737",
  },
}));
export const IconBoxStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "22px",
  height: "22px",
}));
export const SidebarButtonStyled = styled(ListItemButton)(() => ({
  "&.Mui-selected": {
    backgroundColor: "#F5F5F6",
  },
}));
export const GithubProfileStyled = styled(ListItemButton)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "2px 0 2px 0",
  width: "100%",
}));
export const Textseacrhre = styled(TextField)(({ theme }) => ({
  "& .css-1b812tk-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "300px",
    height: "45px",
    backgroundColor: "#FFFFFF",
  },
  "& .css-pmic0h-MuiFormControl-root-MuiTextField-root .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input":
    { width: "480px" },
  height: "60px",
  color: "primary focused",
}));
export const Categoryinput = styled(Autocomplete)(({ theme }) => ({
  width: "280px",
  "& .css-uyzgbr-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "300px",
    height: "45px",
    backgroundColor: "#FFFFFF",
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: "2px solid #F48FB1",
  },
  height: "60px",
  color: "primary focused",

  "& .css-130go8a-MuiAutocomplete-root .MuiOutlinedInput-root.MuiInputBase-sizeSmall0":
    {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
}));
export const Informationbox = styled(TextField)(({ theme }) => ({
  "& .css-1b812tk-MuiInputBase-root-MuiOutlinedInput-root": {
    width: "760px",
    height: "70px",
    backgroundColor: "#FFFFFF",
  },
  "& .css-pmic0h-MuiFormControl-root-MuiTextField-root .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input":
    { width: "480px" },
  height: "60px",
  color: "primary focused",
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    height: "80px",
  },
}));
export const DownloadCvButton = styled(Button)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: "#616161",
  border: "1px solid #F48FB1",
  borderRadius: "16px",
  padding: "8px 16px 8px 16px",
}));

export const DeclineApplicaciontButton = styled(Button)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  //border: "2px solid #BF5F82",
  borderRadius: "16px",
}));
