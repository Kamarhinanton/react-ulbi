import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

  if (!posts.length) {
    return (
      <h2>
        Posts not found ...
      </h2>
    )
  }
  return (
    <div>
      <h1>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="item"
          >
            <PostItem remove={remove} number={index + 1} post={post}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;