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
  const getSearch = async (keywords, category, minPrice, maxPrice) => {
    const results = await axios.get(
      `http://localhost:4000/professional/searchjobs?`
    );
    setGetJobData(results.data.data);
  };
  // } else if (category && maxPrice && minPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?maxPrice=${category}&
  //       minPrice=${minPrice}&category=${maxPrice}`
  //   );
  //   setGetJobData(results.data.data);
  // } //ไม่มีcategory
  // else if (keywords && maxPrice && minPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?keywords=${keywords}&maxPrice=${maxPrice}&
  //   minPrice=${minPrice}&`
  //   );
  //   setGetJobData(results.data.data);
  // } //ไม่มีmaxprice
  // else if (keywords && category && minPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?keywords=${keywords}&
  //       minPrice=${minPrice}&category=${category}`
  //   );
  //   setGetJobData(results.data.data);
  // }
  // //ไม่มีminprice
  // else if (keywords && category && maxPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?keywords=${keywords}&maxPrice=${maxPrice}&
  //   category=${category}`
  //   );
  //   setGetJobData(results.data.data);
  // }
  // //มีแต่ keywords and categories
  // else if (keywords && category) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?keywords=${keywords}&category=${category}`
  //   );
  //   setGetJobData(results.data.data);
  // }
  // //มีแต่ keywords and maxprice
  // else if (keywords && maxPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?keywords=${keywords}&maxPrice=${maxPrice}& `
  //   );
  //   setGetJobData(results.data.data);
  // } //มีแต่ keywords and minprice
  // else if (keywords && minPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?keywords=${keywords}& minPrice=${minPrice}`
  //   );
  //   setGetJobData(results.data.data);
  // } //มีแต่ category and minprice
  // else if (category && minPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?minPrice=${minPrice}&category=${category}`
  //   );
  //   setGetJobData(results.data.data);
  // } //มีแต่ category and maxprice
  // else if (category && maxPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?maxPrice=${maxPrice}& category=${category}`
  //   );
  //   setGetJobData(results.data.data);

  // } //มีแต่ maxprice and minprice
  // else if (minPrice && maxPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs? minPrice=${minPrice}&category=${category}`
  //   );
  //   setGetJobData(results.data.data);
  // } //มีแต่ keywords
  // else if (keywords) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?keywords=${keywords}`
  //   );
  //   setGetJobData(results.data.data);
  // } //มีแต่ category
  // else if (category) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?category=${category}`
  //   );
  //   setGetJobData(results.data.data);
  // } //มีแต่ minsalary
  // else if (minPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?minPrice=${minPrice}`
  //   );
  //   setGetJobData(results.data.data);
  // } //มีแต่ maxsalary
  // else if (maxPrice) {
  //   const results = await axios.get(
  //     `http://localhost:4000/professional/searchjobs?maxPrice=${maxPrice}& `
  //   );
  //   setGetJobData(results.data.data);
  // } else {
  //   const results = await axios.get(`http://localhost:4000/professional/searchjobs`);
  //   setGetJobData(results.data.data);
  // }

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
