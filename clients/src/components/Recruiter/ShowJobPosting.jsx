import { useState } from "react";
import React from "react";
import usePosts from "../../hooks/usePost";
import { useAuth } from "../../contexts/authentication";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { OpenOn, TotalCandidates, CandidatesOnTrack } from "../Status";
import { useEffect } from "react";
import { iconCategory } from "../../utils/utilsFunction";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import JobPostWrapper from "./JobPostWrapper";
import CandidatesWrapper from "./CandidatesWrapper";
import { useParams } from "react-router-dom";

export function ShowJobPostings() {
  const { getUserData, state, isUserLoading, setIsUserLoading } = useAuth();
  const {
    closedPost,
    getPostById,
    getPostByIdData,
    candidatesData,
    isLoading,
    setIsLoading,
  } = usePosts();
  const params = useParams();
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  //Handle filter applications
  const [selectedFilterCandidateStatus, setSelectedFilterCandidateStatus] =
    useState("All");
  const handleFilterCandidates = (event) => {
    setSelectedFilterCandidateStatus(event.target.value);
    setExpanded(false);
    setIsLoading(true);
  };
  const {
    about_job_position,
    closed_at,
    created_at,
    job_id,
    job_requirement,
    job_title,
    max_salary,
    min_salary,
    on_track_candidates,
    option_requirement,
    recruit_status,
    recruiter_id,
    total_candidates,
    type,
    updated_at,
    categories_id,
    name,
  } = getPostByIdData;

  useEffect(() => {
    getUserData();
    const jobId = params.postId;
    getPostById(jobId);
  }, [selectedFilterCandidateStatus]);

  console.log(getPostByIdData);
  console.log(candidatesData);

  const CheckBoxTextStyled = styled(FormControlLabel)(() => ({
    color: "#616161",
    "& .css-1wmf7zz-MuiTypography-root": { fontWeight: 400, fontSize: "14px" },
    "& .css-1482m0e-MuiButtonBase-root-MuiRadio-root": {
      color: "#F48FB1",
    },
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
  }));

  const AccordionSummaryStyled = styled(AccordionSummary)(() => ({
    "& .css-o4b71y-MuiAccordionSummary-content": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }));

  const CloseButton = styled(Button)(() => ({
    fontFamily: "var( --inter-font)",
    fontWeight: "500",
    fontSize: "14px",
    borderRadius: "16px",
    padding: "8px 16px",
    width: "auto",
    "& .MuiSvgIcon-root": {
      fontSize: 28,
    },
  }));

  const candidatesInputs = [
    {
      name: "Guybrush Threepwood",
      email: "guy.brush@mail.com",
      title: "Mighty Pirate",
      phone: "+333555777",
      experience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula.",
      date: "1",
      updated: "03/10/22",
    },
    {
      name: "Ramón Valdés",
      email: "ramon.valdes@vecindad.com",
      title: "Professional Multiservices",
      phone: "+524831212891",
      experience:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat quam ut tempor maximus. Sed neque arcu, rhoncus elementum sodales a, tristique sed quam. Aliquam nibh velit, pharetra ac faucibus in, ornare eu tortor. Vestibulum lacus ligula, elementum sit amet purus ut, sagittis molestie ex. In hendrerit orci tellus. Integer pharetra porttitor nulla, nec fringilla dolor ultricies et. Integer accumsan feugiat urna, eu hendrerit dui varius sit amet. Mauris eget tristique turpis. Curabitur eget hendrerit turpis. Etiam rutrum dolor eu posuere vehicula.",
      date: "1",
      updated: "04/11/22",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F6",
        width: "100%",
        height: "100vh",
        minWidth: "100vh",
        marginLeft: "240px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: "100px",
          marginTop: "30px",
        }}
      >
        {/*------------------------------ Head------------------------------*/}
        <CloseButton
          variant="button"
          color="secondary.main"
          startIcon={
            <ArrowBackIosIcon
              sx={{ width: "20px", height: "20px" }}
              color="info"
            />
          }
          href="/recruiter/jobpost"
        >
          BACK
        </CloseButton>
        <Typography
          variant="h4"
          sx={{ marginTop: "24px", marginBottom: "16px", fontWeight: "400" }}
        >
          Show Job Posting
        </Typography>
        {/*------------------------------ Start information------------------------------*/}
        {
          <JobPostWrapper
            jobTitle={job_title}
            jobCategory={name}
            jobType={type}
            minSalary={min_salary}
            maxSalary={max_salary}
            openDate={created_at}
            totalCandidates={total_candidates}
            candidatesOnTrack={on_track_candidates}
            closeDate={closed_at}
            jobId={job_id}
            recruiterStatus={recruit_status}
            aboutJobPosition={about_job_position}
            optionRequirement={option_requirement}
            jobRequirement={job_requirement}
            categoryId={categories_id}
          />
        }
        {/*------------------------------ Start Filter Jobs ------------------------------*/}
        <FormControl>
          <Typography variant="overline" sx={{ height: "15px" }}>
            FILTER YOUR CANDIDATES
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <CheckBoxTextStyled
              value="All"
              control={<Radio />}
              label="All"
              onChange={handleFilterCandidates}
            />
            <CheckBoxTextStyled
              value="Waiting"
              control={<Radio />}
              label="Waiting"
              onChange={handleFilterCandidates}
            />
            <CheckBoxTextStyled
              value="Reviewing"
              control={<Radio />}
              label="In progress"
              onChange={handleFilterCandidates}
            />
            <CheckBoxTextStyled
              value="Finished"
              control={<Radio />}
              label="Finished"
              onChange={handleFilterCandidates}
            />
          </RadioGroup>
        </FormControl>
        {/*------------------------------ Start Candidates ------------------------------*/}

        <Typography variant="h5" sx={{ marginBottom: "8px" }}>
          {candidatesInputs.length} candidates found
        </Typography>

        {/*------------------------------ Start Candidates ------------------------------*/}
        {candidatesData.map((candidate) => {
          console.log(candidate);
          const {
            application_status,
            applications_experience,
            applications_updated_at,
            applied_at,
            cv_url,
            declined_at,
            education,
            email,
            interested_detail,
            is_upload_cv,
            job_application_id,
            job_id,
            job_title,
            linkedin,
            name,
            phone,
            professional_created_at,
            professional_experience,
            professional_updated_at,
          } = candidate;
          return (
            <CandidatesWrapper
              applicationId={job_application_id}
              applicationStatus={application_status}
              applicationsExperience={applications_experience}
              applicationsUpdatedDate={applications_updated_at}
              appliedDate={applied_at}
              cvUrl={cv_url}
              declinedDate={declined_at}
              education={education}
              email={email}
              interestedDetail={interested_detail}
              jobTitle={job_title}
              linkedIn={linkedin}
              name={name}
              phone={phone}
              professionalCreatedDate={professional_created_at}
              professionalExperience={professional_experience}
              professionalUpdatedDate={professional_updated_at}
            />
          );
        })}
      </Box>
    </Box>
  );
}

// {candidatesInputs.map((content, index) => {
//   return (
//     <Accordion
//       expanded={expanded === `panal${index + 1}`}
//       onChange={handleChange(`panal${index + 1}`)}
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
//           width="auto"
//           spacing={0}
//         >
//           {/*------------------------------ Column 1 ------------------------------*/}
//           <Stack
//             direction="column"
//             justifyContent="center"
//             alignItems="flex-start"
//             width="auto"
//             marginRight="20px"
//             spacing={0}
//           >
//             <Typography variant="h6">{content.name}</Typography>
//             <Typography variant="caption" color="info.main" sx={{}}>
//               <Stack
//                 direction="row"
//                 justifyContent="flex-start"
//                 alignItems="center"
//                 spacing={0}
//                 sx={{
//                   "& .MuiSvgIcon-root": {
//                     fontSize: 20,
//                   },
//                 }}
//               >
//                 <LinkedInIcon
//                   sx={{ marginRight: "6px", marginLeft: "10px" }}
//                 />
//                 {content.title}
//               </Stack>
//             </Typography>
//           </Stack>
//           {/*------------------------------ Column 2 ------------------------------*/}
//           <Stack
//             direction="column"
//             justifyContent="center"
//             width="auto"
//             spacing={0}
//             margin="10px 20px 0 0"
//           >
//             <Typography variant="caption" color="info.main">
//               <Stack
//                 direction="row"
//                 justifyContent="flex-start"
//                 alignItems="center"
//                 spacing={0}
//               >
//                 <MailOutlineIcon
//                   sx={{ marginRight: "6px", marginLeft: "10px" }}
//                 />
//                 {content.email}
//               </Stack>
//               <Stack
//                 direction="row"
//                 justifyContent="flex-start"
//                 alignItems="center"
//                 spacing={0}
//               >
//                 <LocalPhoneIcon
//                   sx={{ marginRight: "6px", marginLeft: "10px" }}
//                 />
//                 {content.phone}
//               </Stack>
//             </Typography>
//           </Stack>
//           {/*------------------------------ Column 3 ------------------------------*/}
//           <Stack>
//             <Stack
//               direction="column"
//               justifyContent="flex-start"
//               alignItems="center"
//               width="90px"
//               spacing={0}
//               textAlign="center"
//               margin="0px 10px 0px 10px"
//             >
//               <MailOutlineIcon
//                 sx={{ marginRight: "6px", marginLeft: "10px" }}
//               />
//               <Typography variant="caption">
//                 Sent {content.date} days ago
//               </Typography>
//             </Stack>
//           </Stack>
//           {/*------------------------------ Column 4 ------------------------------*/}
//           <Stack>
//             <Stack
//               direction="column"
//               justifyContent="flex-start"
//               alignItems="center"
//               width="90px"
//               textAlign="center"
//               spacing={0}
//               color="info.main"
//             >
//               <PauseCircleOutlineIcon
//                 sx={{ marginRight: "6px", marginLeft: "10px" }}
//               />
//               <Typography variant="caption">
//                 Waiting for review
//               </Typography>
//             </Stack>
//           </Stack>
//           {/*------------------------------ Column 5 ------------------------------*/}
//           <Stack height="auto" color="info.main" margin="10px 0 0 20px">
//             <CloseButton
//               variant="contained"
//               color="background"
//               onClick={() => closedPost(content.job_id)}
//             >
//               Mark as started
//             </CloseButton>
//           </Stack>
//         </Stack>
//       </AccordionSummaryStyled>
//       <Stack margin="0 10px 10px 10px ">
//         <Typography variant="caption">
//           LAST UPDATE ON {content.updated}
//         </Typography>
//         <Typography variant="subtitle1" color="error.main">
//           Professional experience
//         </Typography>
//         <Typography variant="body2">{content.experience}</Typography>
//         <Typography variant="subtitle1" color="error.main">
//           Why are you interested in working at The company name SA
//         </Typography>
//         <Typography variant="body2">{content.experience}</Typography>
//       </Stack>
//     </Accordion>
//   );
// })}
