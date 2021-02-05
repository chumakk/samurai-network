import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialog.module.css";

export function Dialog(props) {
  const path = "/dialogs/" + props.state.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        <div className={s.avatarWrapper}>
          <img alt="avatar" className={s.avatar} src={props.state.avatar} />
        </div>
        <div className={s.infoWrapper}>
          <div className={s.name}>{props.state.name}</div>
          <div className={s.timeLastMessage}>{props.state.timeLastMessage}</div>
          <div className={s.lastMessage}>
            <span className={s.lastMessageFrom}>You: </span>
            {props.state.lastMessage}
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Dialog;
