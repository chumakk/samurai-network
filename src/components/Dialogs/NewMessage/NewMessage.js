import React from "react";
import s from "./NewMessage.module.css";
import {
  addNewMessage,
  updateNewMessageTextActionCreator,
} from "../../../state/state.js";

export function NewMessage(props) {

  function changeNewMessageText(e) {
    const text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  function makeNewMessage() {
    props.dispatch(addNewMessage());
  }

  return (
    <div className={s.inputMessage}>
      <textarea
        value={props.state.newMessageText}
        onChange={changeNewMessageText} />
      <button onClick={makeNewMessage}>Отпавить</button>
    </div>
  );
}

export default NewMessage;
