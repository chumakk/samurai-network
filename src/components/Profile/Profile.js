import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <div className={s.profile}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        updateAvatar={props.updateAvatar}
        isOwner={props.isOwner}
        editMode={props.editMode}
        setEditMode={props.setEditMode}
      />
      {!props.editMode && <MyPostsContainer />}
    </div>
  );
}

export default Profile;
