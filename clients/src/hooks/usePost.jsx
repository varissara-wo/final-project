import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function usePosts() {
  const navigate = useNavigate();
  const createPost = async (data) => {
    console.log("dsfaffafs")
    await axios.post(`http://localhost:4000/recruiter/createpost`, data);
    navigate("/");
  };
  return { createPost };
}
export default usePosts;
