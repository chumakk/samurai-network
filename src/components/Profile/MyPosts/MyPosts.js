import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

export function MyPosts() {
  return (
    <div className={s.postsContainer}>
      <h3 className={s.postsTitle}>My posts</h3>
      <NewPost></NewPost>
      <div>
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;
