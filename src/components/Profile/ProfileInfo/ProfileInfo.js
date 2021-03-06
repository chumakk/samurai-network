import React from "react";
import s from "./ProfileInfo.module.css";
import avatar from "../../../assets/images/defaultAvatar.png";
import Preloader from "../../common/Preloader/Preloader";

export function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  const contacts = [];
  for (let key in props.profile.contacts) {
    if (props.profile.contacts[key]) {
      contacts.push(`${key} ${props.profile.contacts[key]} `);
    }
  }

  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1422493757035-1e5e03968f95?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1255&q=80"
          alt="startImage"
        />
      </div>
      <div className={s.descriptionBlock}>
        <div className={s.avatar}>
          {props.profile.photos.large ? (
            <img src={props.profile.photos.large} alt="avatar" />
          ) : (
            <img src={avatar} alt="avatar" />
          )}
        </div>
        <div>{`Name: ${props.profile.fullName}`}</div>
        <div>{`Status: ${props.profile.aboutMe}`}</div>
        <div>
          <span>Search job: </span>
          {props.profile.lookingForAJob === true ? "search" : "no search"}
        </div>
        <div>{`WorkStatus: ${props.profile.lookingForAJobDescription}`}</div>
        <div>
          <span>Контакты: </span>
          {contacts}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
