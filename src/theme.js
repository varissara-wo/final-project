import { createTheme } from "@mui/material";

// Content: {
//   main: "#1E1E1E",
// },
// ContentSecondary: {
//   main: "#5C5C5C",
// },
// White: {
//   main: "#FFFFFF",
// },
// DarkGray: {
//   main: "#373737",
// },
// Darkpink: {
//   main: "#BF5F82",
// },
// Pink: {
//   main: "#F48FB1",
// },
// LightPink: {
//   main: "#FFC1E3",
// },
// Gray: {
//   main: "#616161",
// },
// LightGray: {
//   main: "#8E8E8E",
// },
// Background: {
//   main: "#F5F5F6",
// },
// BackgroundDark: {
//   main: "#E1E2E1",
// },

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F48FB1",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#616161",
    },
    error: {
      main: "#BF5F82",
    },
    warning: {
      main: "#373737",
    },
    info: {
      main: "#8E8E8E",
    },
    success: {
      main: "#FFC1E3",
    },
    background: {
      paper: "#FFF",
      default: "#E1E2E1",
    },
  },
  typography: {
    h1: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "300",
      fontSize: "97px",
    },
    h2: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "300",
      fontSize: "61px",
    },
    h3: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "400",
      fontSize: "48px",
    },
    h4: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "300",
      fontSize: "34px",
    },
    h5: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "300",
      fontSize: "24px",
    },
    h6: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "500",
      fontSize: "20px",
    },
    caption: {
      fontFamily: "var(--inter-font)",
      fontWeight: "400",
      fontSize: "12px",
    },
    overline: {
      fontFamily: "var(--inter-font)",
      fontWeight: "400",
      fontSize: "10px",
    },
    button: {
      fontFamily: "var(--inter-font)",
      fontWeight: "500",
      fontSize: "14px",
    },
    body2: {
      fontFamily: "var(--inter-font)",
      fontWeight: "400",
      fontSize: "14px",
    },
    body1: {
      fontFamily: "var(--inter-font)",
      fontWeight: "500",
      fontSize: "16px",
    },
    subtitle2: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "500",
      fontSize: "14px",
    },
    subtitle1: {
      fontFamily: "var(--inter-font)",
      fontWeight: "400",
      fontSize: "16px",
    },
  },
});


