import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={s.profile}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1255&q=80"
          alt="start-image"
        />
      </div>
      <div>ava + desc</div>
      <MyPosts></MyPosts>
    </div>
  );
}
