import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostSerice";

const PostIdPages = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      <h1>
        You are here. Post # {params.id}
      </h1>
      {isLoading
        ? <div>Loading...</div>
        : <div>{post.id}.{post.title}</div>
      }
      <h2>Comments:</h2>
      {
        isComLoading
          ? <div>Loading...</div>
          : <div>
            {comments.map(com =>
            <div key={com.id}>
              <h5>
                {com.email}
              </h5>
              <p>
                {com.body}
              </p>
            </div>
            )}
          </div>
      }
    </div>
  );
};

export default PostIdPages;