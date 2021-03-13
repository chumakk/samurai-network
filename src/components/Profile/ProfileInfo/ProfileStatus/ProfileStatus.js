import React, { useState, useEffect } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  const [editStatus, setEditStatus] = useState(false);
  const [status, setStatus] = useState(props.status || "");

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  const updateStatus = () => {
    setEditStatus(false);
    props.updateStatus(status);
  };
  return (
    <div className={s.statusContainer}>
      {editStatus ? (
        <div>
          <input
            onChange={onChangeStatus}
            autoFocus={true}
            onBlur={updateStatus}
            value={status}
          />
        </div>
      ) : (
        <div
          onClick={() => {
            setEditStatus(true);
          }}
        >
          Status: <span>{props.status}</span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
