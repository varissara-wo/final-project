import React, { useEffect } from "react";
import ProfessionalSidebar from "../../components/Professional/ProfessionalSidebar.jsx";
import { useParams } from "react-router-dom";
import usePosts from "../../hooks/usePost";
import { Box, CircularProgress, Stack } from "@mui/material";
import { JobDetails } from "../../components/Professional/JobDetail";

const JobDetail = () => {
  const params = useParams();
  const jobId = params.jobid;
  const { getJobById, getJobByIdData, isLoading } = usePosts();

  useEffect(() => {
    setTimeout(() => {
      getJobById(jobId);
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
      <ProfessionalSidebar selectedIndex="0" />
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
        <JobDetails
          jobiD={jobId}
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
        />
      )}
    </Box>
  );
};

export default JobDetail;
