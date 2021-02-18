import React from "react";
import s from "./NewMessage.module.css";

export function NewMessage(props) {
  function onChangeNewMessage(e) {
    const text = e.target.value;
    props.changeNewMessageText(text);
  }

  function onCreateNewMessage() {
    props.createNewMessage();
  }

  return (
    <div className={s.inputMessage}>
      <div>
        <textarea value={props.newMessageText} onChange={onChangeNewMessage} />
      </div>
      <div>
        <button onClick={onCreateNewMessage}>Отпавить</button>
      </div>
    </div>
  );
}

export default NewMessage;
