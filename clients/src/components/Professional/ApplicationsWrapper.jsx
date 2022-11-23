// import { Accordion, AccordionDetails, Typography } from "@mui/material";
// import { Stack } from "@mui/system";
// import React from "react";
// import { SentAgo, WaitingForReview } from "../Status";
// import { DeclineApplicaciontButton, DownloadCvButton } from "./styles";

// export default function ApplicationsWrapper() {
//   return (
//     <Accordion
//       expanded={expanded === "panel1"}
//       onChange={handleChange("panel1")}
//       sx={{ marginBottom: "16px", width: "945px" }}
//     >
//       <AccordionSummaryStyled
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel1bh-content"
//         id="panel1bh-header"
//       >
//         <Stack
//           direction="row"
//           justifyContent="center"
//           alignItems="flex-start"
//           spacing={0}
//         >
//           <Stack
//             direction="row"
//             justifyContent="flex-start"
//             alignItems="center"
//             spacing={0}
//             sx={{
//               "& .MuiSvgIcon-root": {
//                 fontSize: 20,
//               },
//             }}
//           >
//             <Stack sx={{ width: "60px", height: "60px" }}>
//               <img
//                 alt="logo"
//                 src="/images/company-logo/Baby.png"
//                 width="100%"
//                 height="100%"
//               />
//             </Stack>
//             <Stack sx={{ marginLeft: "18px" }}>
//               <Typography variant="h6" sx={{}}>
//                 The Job title
//               </Typography>
//               <Typography variant="subtitle2" color="secondary">
//                 The Company Name SA
//               </Typography>
//             </Stack>
//           </Stack>
//         </Stack>
//         <Stack
//           direction="column"
//           justifyContent="flex-start"
//           alignItems="center"
//           spacing={0}
//           sx={{
//             "& .MuiSvgIcon-root": {
//               fontSize: 20,
//             },
//           }}
//         >
//           <Typography variant="caption" color="info.main" sx={{}}>
//             <Stack
//               direction="row"
//               justifyContent="flex-start"
//               alignItems="center"
//               spacing={0}
//               sx={{
//                 "& .MuiSvgIcon-root": {
//                   fontSize: 20,
//                 },
//               }}
//             >
//               <VillaOutlinedIcon
//                 sx={{
//                   marginRight: "6px",
//                 }}
//               />
//               Manufactoring
//               <DateRangeOutlinedIcon
//                 sx={{ marginRight: "6px", marginLeft: "10px" }}
//               />
//               Full time
//             </Stack>
//             <Stack
//               direction="row"
//               justifyContent="flex-start"
//               alignItems="center"
//               spacing={0}
//               sx={{
//                 "& .MuiSvgIcon-root": {
//                   fontSize: 20,
//                 },
//               }}
//             >
//               <MonetizationOnOutlinedIcon sx={{ marginRight: "6px" }} />
//               20k - 22k
//               <AccessTimeOutlinedIcon
//                 sx={{ marginRight: "6px", marginLeft: "10px" }}
//               />
//               Posted 2 days ago
//             </Stack>
//           </Typography>
//         </Stack>

//         <Stack
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//           spacing={0}
//         >
//           <SentAgo day="5" />
//           <WaitingForReview />
//         </Stack>
//       </AccordionSummaryStyled>
//       <AccordionDetails sx={{ paddingBottom: "0", paddingTop: "0" }}>
//         <Typography variant="overline" color="secondary">
//           Last Updated on 03/22/21
//         </Typography>
//       </AccordionDetails>
//       <AccordionDetails>
//         <Typography variant="subtitle1" color="error.main">
//           Professional experience
//         </Typography>
//         <Typography variant="body2">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat
//           quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a,
//           tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in,
//           ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus
//           ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra
//           porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan
//           feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique
//           turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere
//           vehicula.
//         </Typography>
//       </AccordionDetails>
//       <AccordionDetails>
//         <Typography variant="body2">
//           Pellentesque ut mauris neque. Maecenas posuere sit amet erat at
//           placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Suspendisse potenti. Donec tempor lobortis nisl. Maecenas sit amet
//           massa in tortor pulvinar sollicitudin. Fusce vitae feugiat felis, ut
//           malesuada purus. Curabitur felis velit, interdum vitae viverra quis,
//           sagittis ac nulla. Quisque tempus pharetra ornare. In sed nulla eget
//           risus cursus facilisis vel quis nibh. Praesent euismod lectus a.
//         </Typography>
//       </AccordionDetails>
//       <AccordionDetails>
//         <Typography variant="subtitle1" color="error.main">
//           Why are you interested in working at The company name SA
//         </Typography>
//         <Typography variant="body2">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
//           egestas ex at libero feugiat volutpat. Praesent fringilla scelerisque
//           felis, ac elementum metus fringilla in. Maecenas et nibh fringilla,
//           egestas arcu vel, tristique dui. Nulla quis suscipit erat, nec pretium
//           arcu. Aenean blandit lacinia mauris, quis bibendum ante sagittis
//           cursus. Pellentesque mattis ipsum et lorem euismod rutrum. Duis
//           ullamcorper venenatis nisi, nec malesuada tellus tincidunt a. Maecenas
//           suscipit odio sed justo accumsan iaculis. Quisque vitae erat ac felis
//           tincidunt auctor vitae non est. Praesent vehicula feugiat faucibus.
//         </Typography>
//       </AccordionDetails>
//       <Stack
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "0 16px 16px 16px",
//         }}
//       >
//         <DownloadCvButton
//           startIcon={<FileDownloadOutlinedIcon color="secondary" />}
//         >
//           <Typography variant="button" color={"secondary"}>
//             Download cv
//           </Typography>
//         </DownloadCvButton>
//         <DeclineApplicaciontButton
//           variant="contained"
//           color="error"
//           startIcon={<HighlightOffOutlinedIcon />}
//           sx={{ marginLeft: "16px" }}
//         >
//           <Typography variant="button">decline applicacion</Typography>
//         </DeclineApplicaciontButton>
//       </Stack>
//     </Accordion>
//   );
// }
