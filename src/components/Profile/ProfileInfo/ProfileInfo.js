import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import Avatar from "./Avatar/Avatar";
import ProfileForm from "./ProfileForm/ProfileForm";
import ProfileDesc from "./ProfileDesc/ProfileDesc";

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  const contacts = [];
  for (let key in props.profile.contacts) {
    if (props.profile.contacts[key]) {
      contacts.push(
        <Contact
          key={key}
          conctactKey={key}
          href={props.profile.contacts[key]}
        />
      );
    }
  }

  return (
    <div>
      <div className={s.profileBlock}>
        <div className={s.avatarWrapper}>
          <Avatar
            photos={props.profile.photos}
            isOwner={props.isOwner}
            updateAvatar={props.updateAvatar}
            editMode={props.editMode}
          />
          {props.isOwner && (
            <div className={s.editModeWrapper}>
              {!props.editMode ? (
                <button
                  className={s.editMode}
                  onClick={() => props.setEditMode(true)}
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  className={s.editMode}
                  onClick={() => props.setEditMode(false)}
                >
                  Cancel Edit
                </button>
              )}
            </div>
          )}
        </div>
        <div className={s.ProfileWrapper}>
          {props.editMode ? (
            <ProfileForm
              profile={props.profile}
              contacts={contacts}
              setEditMode={props.setEditMode}
            />
          ) : (
            <ProfileDesc
              profile={props.profile}
              status={props.status}
              updateStatus={props.updateStatus}
              isOwner={props.isOwner}
              contacts={contacts}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const Contact = ({ conctactKey, href }) => {
  return (
    <div className={s.contact}>
      <a href={`https://${href}`} className={s.contactHref} >
        {conctactKey}
      </a>
    </div>
  );
};

export default ProfileInfo;
