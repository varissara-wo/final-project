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
  const [ProfessionalProfile, setProfessionalProfile] = useState([]);
  const [message, setMessage] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

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
    console.log(type1);
    console.log(min);
    console.log(max);
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

  const getProfessionalUserProfile = async (professionalId) => {
    console.log(professionalId);
    const results = await axios.get(
      `http://localhost:4000/professional/profile/${professionalId}`
    );
    console.log(results);
    setProfessionalProfile(results.data.data);
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

  const Apply = async (jobId, formData) => {
    console.log(formData.body);
    await axios.post(
      `http://localhost:4000/professional/apply/${jobId}`,
      formData
    );
    console.log("ผ่านไหหมจะ");
    navigate("/applications");
  };
  const UpdateProifleRecruiter = async (recruiterId, formData) => {
    console.log(recruiterId, formData);
    await axios.put(
      `http://localhost:4000/recruiter/profile/${recruiterId}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    setIsLoading(false);
    navigate("/recruiter/profile");
  };

  //Get jobs applications
  const getJobApplications = async (user_id, applicationStatus) => {
    console.log(user_id);
    const results = await axios.get(
      `http://localhost:4000/professional/applications?user_id=${user_id}&status=${applicationStatus}`
    );
    setJobApplicationsData(results.data.data);
    setFilterStatus(applicationStatus);
    setIsLoading(false);
  };

  //Decline Application
  const declineApplication = async (applicationId) => {
    console.log(applicationId);
    await axios.put(
      `http://localhost:4000/professional/applications/${applicationId}`
    );
  };

  const UpdateProifleProfessional = async (professionalId, formData) => {
    try {
      const result = await axios.put(
        `http://localhost:4000/professional/${professionalId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      const message = result.data.message;
      if (message === "** This email is unavailable") {
        setMessage(message);
        window.scrollTo(0, 0);
        setIsLoading(false);
      } else {
        navigate("/findjobs");
      }
    } catch (err) {
      console.log(err);
    }
    console.log(professionalId, formData);
  };
  const Datajob = async (user_id) => {
    const results = await axios.get(
      `http://localhost:4000/professional/applications/${user_id}`
    );
    setJobApplicationsData(results.data.data);
    setIsLoading(false);
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
    UpdateProifleProfessional,
    getProfessionalUserProfile,
    ProfessionalProfile,
    message,
    Datajob,
  };
}
export default usePosts;
