import React from "react";
import Dialogs from "./Dialogs";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  addNewMessage,
} from "../../state/dialogs-reducer.js";
import withAuthRedirect from "../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewMessage: (text) => {
      dispatch(addNewMessage(text));
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
