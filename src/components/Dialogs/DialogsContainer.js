import React from "react";
import Dialogs from "./Dialogs";
import {
  addNewMessage,
  updateNewMessageTextActionCreator,
} from "../../state/dialogs-reducer.js";

function DialogsContainer(props) {
  const state = props.store.getState();

  function createNewMessage() {
    props.store.dispatch(addNewMessage());
  }

  function changeNewMessageText(text) {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <Dialogs
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageText={state.dialogsPage.newMessageText}
      createNewMessage={createNewMessage}
      changeNewMessageText={changeNewMessageText}
    />
  );
}

export default DialogsContainer;
