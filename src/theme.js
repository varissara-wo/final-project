import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    Content: {
      main: "#1E1E1E",
    },
    ContentSecondary: {
      main: "#5C5C5C",
    },
    White: {
      main: "#FFFFFF",
    },
    DarkGray: {
      main: "#373737",
    },
    Darkpink: {
      main: "#BF5F82",
    },
    Pink: {
      main: "#F48FB1",
    },
    LightPink: {
      main: "#FFC1E3",
    },
    Gray: {
      main: "#616161",
    },
    LightGray: {
      main: "#8E8E8E",
    },

    Background: {
      main: "#F5F5F6",
    },
    BackgroundDark: {
      main: "#E1E2E1",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Montserrat', sans-serif;
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('Raleway'), local('Raleway-Regular'), url(${https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap}) format('woff2');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //   },
  // },
});

// export const theme = createTheme({
//   typography: {
//     fontFamily: "Raleway, Arial",
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'Raleway';
//           font-style: normal;
//           font-display: swap;
//           font-weight: 400;
//           src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
//           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//         }
//       `,
//     },
//   },
// });

// // ...
// return (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <Box
//       sx={{
//         fontFamily: "Raleway",
//       }}
//     >
//       Raleway
//     </Box>
//   </ThemeProvider>
// );
