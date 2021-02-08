import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;
