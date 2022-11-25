import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function usePosts() {
  const [data, setData] = useState([]);
  const [follow, setFollow] = useState([]);
  const [numberOffollow, setNumberOffollow] = useState(0);
  const [profile, setProfile] = useState([]);
  const [getJobData, setGetJobData] = useState([]);
  const [getJobByIdData, setGetJobByIdData] = useState({});
  const [userdata, setUserdata] = useState([]);
  const [numberOfJobs, setNumberOfJobs] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [followJob, setFollowJob] = useState([]);
  const [jobApplicationsData, setJobApplicationsData] = useState([]);

  const navigate = useNavigate();

  const createPost = async (data) => {
    await axios.post(`http://localhost:4000/recruiter/createpost`, data);
    navigate("/recruiter/jobpost");
  };
  const getPost = async (recruiterId) => {
    const results = await axios.get(
      `http://localhost:4000/recruiter/jobs/${recruiterId}`
    );
    setData(results.data.data);
    setNumberOfJobs(results.data.data.length);
  };
  const closedPost = async (jobId) => {
    await axios.put(`http://localhost:4000/recruiter/jobs/${jobId}`, []);
  };

  const selectPost = async (recruiterId, type) => {
    const results = await axios.get(
      `http://localhost:4000/recruiter/jobs/${recruiterId}?type=${type}`
    );
    setData(results.data.data);
    setIsLoading(false);
  };

  const getJobs = async () => {
    const results = await axios.get(`http://localhost:4000/professional/jobs/`);
    const jobData = results.data.data;
    setGetJobData([...jobData]);
    setIsLoading(false);
  };

  const getJobById = async (jobId) => {
    const results = await axios.get(
      `http://localhost:4000/professional/jobs/${jobId}`
    );
    const jobData = results.data.data;

    setGetJobByIdData(jobData);
    setIsLoading(false);
  };

  const getSearch = async (
    keywords,
    category,
    minPrice,
    maxPrice,
    type,
    userId
  ) => {
    let key = keywords || "";
    let cat = category || "";
    let min = minPrice || "";
    let max = maxPrice || "";
    let type1 = type || "";

    const results = await axios.get(
      `http://localhost:4000/professional/searchjobs/${userId}?maxPrice=${max}&minPrice=${min}&category=${cat}&keywords=${key}&type=${type1}`
    );

    setGetJobData(results.data.data);
    setFollowJob(results.data.follow);
    setIsLoading(false);
  };
  const getUserprofile = async (recruiterId) => {
    console.log(recruiterId);
    const results = await axios.get(
      `http://localhost:4000/recruiter/profile/${recruiterId}`
    );
    console.log(results);
    setProfile(results.data.data);
    setIsLoading(false);
  };
  const getFollow = async (professionalId) => {
    const results = await axios.get(
      `http://localhost:4000/professional/follow/${professionalId}`
    );

    setFollow(results.data.data);
    setIsLoading(false);
  };

  const followJobApplication = async (jobId, professionalId) => {
    const data = {
      jobId: jobId,
      professionalId: professionalId,
    };

    await axios.post(
      `http://localhost:4000/professional/follow/application`,
      data
    );
    setIsLoading(false);
  };
  const getUser = async (professionalId) => {
    const results = await axios.get(
      `http://localhost:4000/professional/profile/${professionalId}`
    );
    setUserdata(results.data.data);
  };
  const Apply = async (jobId, data) => {
    console.log(data);
    await axios.post(`http://localhost:4000/professional/apply/${jobId}`, data);
    navigate("/applications");
  };
  const UpdateProifleRecruiter = async (recruiterId, data) => {
    console.log(recruiterId, data);
    await axios.put(
      `http://localhost:4000/recruiter/profile/${recruiterId}`,
      data
    );

    navigate("/recruiter/profile");
  };

  //Get jobs applications
  const getJobApplications = async (user_email, applicationStatus) => {
    const results = await axios.get(
      `http://localhost:4000/professional/applications?user_email=${user_email}&status=${applicationStatus}`
    );
    setJobApplicationsData(results.data.data);
    setIsLoading(false);
  };

  //Decline Application
  const declineApplication = async (applicationId) => {
    console.log(applicationId);
    await axios.put(
      `http://localhost:4000/professional/applications/${applicationId}`
    );
  };

  return {
    createPost,
    getPost,
    data,
    numberOfJobs,
    closedPost,
    selectPost,
    getJobs,
    getJobData,
    isLoading,
    getJobById,
    getJobByIdData,
    getSearch,
    getUserprofile,
    profile,
    followJob,
    getFollow,
    userdata,
    getUser,
    Apply,
    follow,
    setIsLoading,
    followJobApplication,
    UpdateProifleRecruiter,
    getJobApplications,
    jobApplicationsData,
    declineApplication,
  };
}
export default usePosts;
