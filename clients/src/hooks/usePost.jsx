import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function usePosts(){
    const navigate = useNavigate();
    const createPost = async (data) => {
        await axios.post(`http://localhost:4000/posts`, data);
        navigate("#viewjobpost");
        
          
      };
      return {createPost}
}
export default usePosts;