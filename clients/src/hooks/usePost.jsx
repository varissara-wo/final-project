import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CompressOutlined } from "@mui/icons-material";
function usePosts() {
  const [data, setData] = useState([]);
  const [numberOfJobs, setNumberOfJobs] = useState(0);
  const [categories, setCategories] = useState([]);
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

    // for (let i = 0; i < results.data.data.length; i++) {
    //   const arr = results.data.data;
    //   console.log(i);
    //   if (arr[i].recruit_status === "closed" && status === "closed") {
    //     setData(...data, results[i].data.data);
    //     console.log(...data, results[i].data.data);
    //   } else if (arr[i].on_track_candidates > 0 && num > 0) {
    //     setData(...data, results[i].data.data);
    //   } else {
    //     setData(results.data.data);
    //   }
    // }
    // console.log(data);
  };
  return { createPost, getPost, data, numberOfJobs, closedPost, selectPost };
}
export default usePosts;
//อย่าลืม http อย่าลืม
//อย่าลืม http อย่าลืม
//อย่าลืม http อย่าลืม
//อย่าลืม http อย่าลืม
