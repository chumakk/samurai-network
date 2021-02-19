import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import { subscribeAC, unsubscribeAC } from "../../state/users-reducer";

const mapStateToProps = (state) => {
  return { users: state.usersPage.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribe: (userId) => {
      dispatch(subscribeAC(userId));
    },
    unsubscribe: (userId) => {
      dispatch(unsubscribeAC(userId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
