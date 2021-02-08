import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

function MyPosts(props) {
  const posts = props.state.posts.map((post) => (
    <Post key={post.id} text={post.text} countOfLikes={post.countOfLikes} />
  ));
  return (
    <div className={s.postsContainer}>
      <h3 className={s.postsTitle}>My posts</h3>
      <NewPost state={props.state} dispatch={props.dispatch}></NewPost>
      <div>{posts}</div>
    </div>
  );
}

export default MyPosts;
