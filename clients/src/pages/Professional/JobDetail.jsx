import React, { useEffect } from "react";
import ProfessionalSidebar from "../../components/Professional/ProfessionalSidebar.jsx";
import { useParams } from "react-router-dom";
import usePosts from "../../hooks/usePost";
import Box from "@mui/material/Box";
import { JobDetails } from "../../components/Professional/JobDetail";

const JobDetail = () => {
  const params = useParams();
  const jobId = params.jobid;
  const { getJobById, getJobByIdData } = usePosts();

  useEffect(() => {
    getJobById(jobId);
  }, []);

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
    </Box>
  );
};

export default JobDetail;
