import React, { useRef, useState, useEffect } from "react";
import s from "./Avatar.module.css";
import avatar from "../../../../assets/images/defaultAvatar.png";
import Loader from "../../../common/Loader/Loader";

const Avatar = (props) => {
  const [changing, toggleChanging] = useState(false);
  const [error, setError] = useState(null);
  const inputFile = useRef();

  useEffect(() => {
    setError(null);
  }, [props.editMode]);

  const updateAvatar = async (e) => {
    if (e.target.files.length) {
      setError(null);
      toggleChanging(true);
      try {
        const rez = await props.updateAvatar(e.target.files[0]);
      } catch (e) {
        setError(`${e}`);
      }
      toggleChanging(false);
    }
  };
  return (
    <div className={s.avatarContainer}>
      <div className={s.avatar}>
        {props.photos.large ? (
          <img src={props.photos.large} alt="avatar" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
      </div>
      {props.isOwner && props.editMode && (
        <div>
          <input
            className={s.inputPhoto}
            ref={inputFile}
            type="file"
            onChange={updateAvatar}
          />
          <button
            className={s.inputButton}
            onClick={() => inputFile.current.click()}
            disabled={changing}
          >
            {changing ? <Loader /> : "Change photo"}
          </button>
          {error && <div className={s.errors}>{error}</div>}
        </div>
      )}
    </div>
  );
};

export default Avatar;
