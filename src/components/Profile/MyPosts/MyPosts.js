import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <div>
      My posts
      <NewPost></NewPost>
      <div>
        <Post />
        <Post />
      </div>
    </div>
  );
}
