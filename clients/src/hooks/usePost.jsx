import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

function usePosts() {
  const [data, setData] = useState([]);

  const [follow, setFollow] = useState([]);
  const [numberOffollow, setNumberOffollow] = useState(0);

  const [getJobData, setGetJobData] = useState([]);

  const [numberOfJobs, setNumberOfJobs] = useState(0);

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

  // const getJobs = async (text,cate,type,salary) => {
  //   const results = await axios.get(`http://localhost:4000/professional/jobs/`);
  //   const jobData = results.data.data;
  //   console.log(jobData[0].job_title.toLowerCase())

  //   setGetJobData([...jobData]);

  // };
  const getFollow = async (professionalId) => {
    const results = await axios.get(
      `http://localhost:4000/professional/follow/${professionalId}`
    );

    setFollow(results.data.data);

    setNumberOffollow(results.data.data.length);
    console.log(numberOfJobs);
  };
  
  const getSearch = async (keywords, category, minPrice, maxPrice,type) => {
    let key = keywords || ""
    let cat = category || ""
    let min = minPrice || ""
    let max = maxPrice || ""
    let type1 = type  || ""
  
    const results = await axios.get(
      `http://localhost:4000/professional/searchjobs?maxPrice=${max}&minPrice=${min}&category=${cat}&keywords=${key}&type=${type1}`
    );
   
    setGetJobData(results.data.data);
  };
 

  return {
    createPost,
    getPost,
    data,
    numberOfJobs,
    closedPost,
    selectPost,

    getJobData,
    follow,
    getFollow,
    numberOfJobs,
    getSearch,
  };
}
export default usePosts;
