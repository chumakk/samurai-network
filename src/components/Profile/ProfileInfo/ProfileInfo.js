import React from "react";
import s from "./ProfileInfo.module.css";

import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Avatar from "./Avatar/Avatar";

function ProfileInfo(props) {
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
      <div className={s.descriptionBlock}>
        <Avatar photos={props.profile.photos} isOwner={props.isOwner} updateAvatar={props.updateAvatar} />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
          isOwner={props.isOwner}
        />
        <div>{`Name: ${props.profile.fullName}`}</div>
        <div>{`Desc: ${props.profile.aboutMe}`}</div>
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
