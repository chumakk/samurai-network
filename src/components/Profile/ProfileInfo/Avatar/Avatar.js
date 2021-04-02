import React from "react";
import s from "./Avatar.module.css";
import avatar from "../../../../assets/images/defaultAvatar.png";

const Avatar = (props) => {
  const updateAvatar = (e) => {
    if (e.target.files.length) {
      props.updateAvatar(e.target.files[0]);
    }
  };
  return (
    <>
      <div className={s.avatar}>
        {props.photos.large ? (
          <img src={props.photos.large} alt="avatar" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
      </div>
      {props.isOwner && (
        <div>
          <input type="file" onChange={updateAvatar} />
        </div>
      )}
    </>
  );
};

export default Avatar;
