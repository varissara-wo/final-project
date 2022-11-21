import React, { useEffect } from "react";
import ProfessionalSidebar from "../../components/Professional/ProfessionalSidebar";

import Applyjob from "../../components/Professional/ApplyJob.jsx";
import usePosts from "../../hooks/usePost";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Stack } from "@mui/material";
const ApplicationForm = () => {
  const params = useParams();
  const jobId = params.jobid;
  const { getJobById, getJobByIdData, isLoading, getUser, userdata } =
    usePosts();
  const userid = 20;
  useEffect(() => {
    setTimeout(() => {
      getJobById(jobId);
      getUser(userid);
    }, 800);
  }, [isLoading]);
  const {
    about_company,
    about_job_position,
    company_name,
    created_at,
    job_id,
    job_requirement,
    job_title,
    logo_url,
    max_salary,
    min_salary,
    name,
    option_requirement,
    type,
  } = getJobByIdData;

  return (
    <Box
      className="findjobs-container"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <ProfessionalSidebar selectedIndex="1" />

      {isLoading === true && (
        <Stack
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#F5F5F6",
            width: "100%",
            height: "100%",
            minHeight: "100vh",
            minWidth: "100vh",
            marginLeft: "240px",
          }}
        >
          <CircularProgress disableShrink />
        </Stack>
      )}
      {isLoading === false && (
        <Applyjob
          jobiD={jobId}
          profess={userdata}
          aboutCompany={about_company}
          aboutJob={about_job_position}
          companyName={company_name}
          createdTime={created_at}
          jobId={job_id}
          requirement={job_requirement}
          optionalRequirement={option_requirement}
          jobTitle={job_title}
          companyLogo={logo_url}
          maxSalary={max_salary}
          minSalary={min_salary}
          category={name}
          jobType={type}
          userid={userid}
        />
      )}
    </Box>
  );
};

export default ApplicationForm;
