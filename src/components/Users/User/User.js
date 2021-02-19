import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";

function User(props) {
  function onSubscribe(e, userId) {
    e.preventDefault();
    props.subscribe(userId);
  }
  function onUnubscribe(e, userId) {
    e.preventDefault();
    props.unsubscribe(userId);
  }
  return (
    <div className={s.wrapper}>
      <NavLink className={s.link} to="/users/1">
        <div className={s.container}>
          <div className={s.userFollow}>
            <div className={s.avatarWrapper}>
              <img
                className={s.avatar}
                src={props.user.avatarUrl}
                alt="avatar"
              />
            </div>
            <div className={s.followButtonWrapper}>
              {props.user.subscribed ? (
                <button
                  className={s.followButton}
                  onClick={(e) => onUnubscribe(e, props.user.id)}
                >
                  unsubscribe
                </button>
              ) : (
                <button
                  className={s.followButton}
                  onClick={(e) => onSubscribe(e, props.user.id)}
                >
                  subscribe
                </button>
              )}
            </div>
          </div>
          <div className={s.description}>
            <div className={s.nameWrapper}>
              <div className={s.name}>{props.user.fullName}</div>
              <div className={s.status}>{props.user.status}</div>
            </div>
            <div className={s.userLocation}>
              <div className={s.country}>
                {props.user.location.country}&#44;
              </div>
              <div className={s.city}>{props.user.location.city}</div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default User;
