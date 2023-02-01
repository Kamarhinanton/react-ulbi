import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate()
  return (
    <div>
        <div>
          <strong>
            {props.post.id}.{props.post.title}
          </strong>
          <div>
            {props.post.body}
          </div>
        </div>
      <div>
        <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)} >open</MyButton>
      </div>
    </div>
      );
      };

      export default PostItem;