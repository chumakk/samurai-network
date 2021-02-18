import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  addNewMessage,
  updateNewMessageTextActionCreator,
} from "../../state/dialogs-reducer.js";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewMessage: () => {
      dispatch(addNewMessage());
    },
    changeNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
