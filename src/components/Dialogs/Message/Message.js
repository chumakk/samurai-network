import React from "react";
import s from "./Message.module.css";

export function Message(props) {
  return <div className={s.message} id = {props.state.id}>{props.state.message}</div>;
}

export default Message;