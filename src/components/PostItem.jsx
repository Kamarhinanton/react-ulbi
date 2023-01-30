import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div>
        <div>
          <strong>
            {props.number}.{props.post.title}
          </strong>
          <div>
            {props.post.body}
          </div>
        </div>
      <div>
        <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
      </div>
    </div>
      );
      };

      export default PostItem;