import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function usePosts() {
  const [data, setData] = useState([]);

  const [follow, setFollow] = useState([]);
  const [numberOffollow, setNumberOffollow] = useState(0);

  const [getJobData, setGetJobData] = useState([]);
  const [getJobByIdData, setGetJobByIdData] = useState({});
  const [numberOfJobs, setNumberOfJobs] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [jobApplicationsData, setJobApplicationsData] = useState({});

  const navigate = useNavigate();
  const createPost = async (data) => {
    console.log(data);
    await axios.post(`http://localhost:4000/recruiter/createpost`, data);
    navigate("/");
  };
  const getPost = async (recruiterId) => {
    const results = await axios.get(
      `http://localhost:4000/recruiter/jobs/${recruiterId}`
    );

    setData(results.data.data);
    console.log(data);
    setNumberOfJobs(results.data.data.length);
  };
  const closedPost = async (jobId) => {
    console.log(jobId);
    await axios.put(`http://localhost:4000/recruiter/jobs/${jobId}`, []);
    console.log("finish");
  };
  const selectPost = async (recruiterId, type) => {
    console.log(recruiterId, type);
    const results = await axios.get(
      `http://localhost:4000/recruiter/jobs/${recruiterId}`
    );

    const jobData = results.data.data;
    console.log(results.data.data);

    if (type === "all") {
      setData(jobData);
    } else if (type === "onTrack") {
      const onTrack = jobData.filter((post) => post.on_track_candidates > 0);
      setData(onTrack);
    } else if (type === "closed") {
      const closeJob = jobData.filter(
        (post) => post.recruit_status === "closed"
      );
      setData(closeJob);
    }
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

  const getSearch = async (keywords, category, minPrice, maxPrice, type) => {
    let key = keywords || "";
    let cat = category || "";
    let min = minPrice || "";
    let max = maxPrice || "";
    let type1 = type || "";

    const results = await axios.get(
      `http://localhost:4000/professional/searchjobs?maxPrice=${max}&minPrice=${min}&category=${cat}&keywords=${key}&type=${type1}`
    );

    setGetJobData(results.data.data);
    setIsLoading(false);
  };

  //Get jobs applications
  const getJobApplications = async (user_email, applicationStatus) => {
    const results = await axios.get(
      `http://localhost:4000/professional/applications?user_email=${user_email}&status=${applicationStatus}`
    );
    console.log(results.data.data);
    // setJobApplicationsData(results.data.data);
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
    getJobApplications,
    jobApplicationsData,
  };

  //   const getFollow = async (professionalId) => {
  //     const results = await axios.get(
  //       `http://localhost:4000/professional/follow/${professionalId}`
  //     );

  //     setFollow(results.data.data);

  //     setNumberOffollow(results.data.data.length);
  //     console.log(numberOfJobs);
  //   };
  //   return {
  //     createPost,
  //     getPost,
  //     data,
  //     numberOfJobs,
  //     closedPost,
  //     selectPost,
  //     follow,
  //     getFollow,
  //     numberOfJobs,
  //   };
}
export default usePosts;
