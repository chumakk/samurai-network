import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
  
}

export default Profile;
