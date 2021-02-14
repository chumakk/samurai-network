import React from "react";
import s from "./NewMessage.module.css";

export function NewMessage(props) {

  function onChangeNewMessage(e) {
    const text = e.target.value;
    props.changeNewMessageText(text);
    // props.dispatch(updateNewMessageTextActionCreator(text));
  }

  function onCreateNewMessage() {
    props.createNewMessage();
    // props.dispatch(addNewMessage());
  }

  return (
    <div className={s.inputMessage}>
      <textarea
        value={props.newMessageText}
        onChange={onChangeNewMessage} />
      <button onClick={onCreateNewMessage}>Отпавить</button>
    </div>
  );
}

export default NewMessage;
