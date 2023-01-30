import React from 'react';

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
        <button>delete</button>
      </div>
    </div>
      );
      };

      export default PostItem;