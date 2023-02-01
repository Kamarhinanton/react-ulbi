import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostSerice";

const PostIdPages = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
  }, [])

  return (
    <div>
      <h1>
        You are here. Post # {params.id}
      </h1>
      {isLoading
        ? <div>Loading...</div>
        :<div>{post.id}.{post.title}</div>
      }
    </div>
  );
};

export default PostIdPages;