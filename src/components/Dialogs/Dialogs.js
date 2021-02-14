import React from "react";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

function Dialogs(props) {
  const dialogs = props.dialogs.map((dialog) => (
    <Dialog key={dialog.id} state={dialog} />
  ));

  const messages = props.messages.map((message) => (
    <Message key={message.id} state={message} />
  ));

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogsTitle}>Dialogs</div>
      <div className={s.dialogsItems}>{dialogs}</div>
      <div className={s.messageSide}>
        <div className={s.messageContainer}>{messages}</div>
        <NewMessage
          newMessageText={props.newMessageText}
          createNewMessage={props.createNewMessage}
          changeNewMessageText={props.changeNewMessageText}
        />
      </div>
    </div>
  );
}

export default Dialogs;
