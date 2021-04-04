import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import s from "./ProfileDesc.module.css";

function ProfileDesc(props) {
  return (
    <div>
      <div className={s.name}>{props.profile.fullName}</div>
      <ProfileStatus
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
      />
      <div className={s.jobLooking}>
        <span>Job status: </span>
        {props.profile.lookingForAJob === true ? "looking" : "no looking"}
      </div>
      <div className={s.jobDescription}>
        <span>Slogan: </span>
        {props.profile.lookingForAJobDescription}
      </div>
      <div className={s.about}>
        <div className={s.title}>About me </div>
        {props.profile.aboutMe}
      </div>
      <div>
        <div className={s.title}>Contacts: </div>
        <div className={s.contactsWrapper}>{props.contacts}</div>
      </div>
    </div>
  );
}

export default ProfileDesc;
