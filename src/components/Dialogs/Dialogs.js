import React from "react";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

function Dialogs() {
  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogsTitle}>Dialogs</div>
      <div className={s.dialogsItems}>
        <Dialog name="Kirill" id="1"></Dialog>
        <Dialog name="Valera" id="2"></Dialog>
        <Dialog name="Maxim" id="3"></Dialog>
      </div>
      <div className={s.messageContainer}>
        <Message message="Hi"></Message>
        <Message message="How are you doing?"></Message>
        <Message message="YO"></Message>
      </div>
    </div>
  );
}

export default Dialogs;
