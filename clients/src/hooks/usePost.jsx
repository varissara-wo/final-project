import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function usePosts() {
  const [data,setData] = useState([])
  const [numberOfJobs, setNumberOfJobs] = useState(0);
  const [categories,setCategories] = useState([])
  const navigate = useNavigate();
  const createPost = async (data) => {
    console.log(data);
    await axios.post(`http://localhost:4000/recruiter/createpost`, data);
    navigate("/");
  };
  const getPost = async (recruiterId) => {
    console.log(`localhost:4000/recruiter/jobs/${recruiterId}`)
    const results = await axios.get(`http://localhost:4000/recruiter/jobs/${recruiterId}`)
    
    setData(results.data.data)
    console.log(data)
    setNumberOfJobs(results.data.data.length)
   
  };
  const closedPost = async (jobId) => {
   
    await axios.put(`localhost:4000/recruiter/jobs/${jobId}`,[])
   
   
  };
;
  return { createPost ,getPost,data,numberOfJobs,closedPost};
}
export default usePosts;
