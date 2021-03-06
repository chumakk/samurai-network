import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

function MyPosts(props) {
  const posts = props.posts.map((post) => (
    <Post key={post.id} text={post.text} countOfLikes={post.countOfLikes} />
  ));
  return (
    <div className={s.postsContainer}>
      <h3 className={s.postsTitle}>My posts</h3>
      <NewPost
        createPost={props.createPost}
      />
      <div>{posts}</div>
    </div>
  );
}

export default MyPosts;
