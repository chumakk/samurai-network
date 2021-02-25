import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  subscribeAC,
  unsubscribeAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersAC,
  toggleIsFetchingAC,
} from "../../state/users-reducer";
import Preloder from "../common/Preloader/Preloader";
import * as axios from "axios";

class UsersApiContainer extends React.Component {
  constructor(props) {
    super(props);
    this.selectPage = this.selectPage.bind(this);
  }
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
  }

  selectPage(number) {
    this.props.toggleIsFetching(true);
    this.props.setPage(number);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.usersOnPage}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div style={{ position: "relative" }}>
        {this.props.isFetching ? <Preloder /> : null}
        <Users
          users={this.props.users}
          currentPage={this.props.currentPage}
          totalUsers={this.props.totalUsers}
          usersOnPage={this.props.usersOnPage}
          selectPage={this.selectPage}
          subscribe={this.props.subscribe}
          unsubscribe={this.props.unsubscribe}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersOnPage: state.usersPage.usersOnPage,
    totalUsers: state.usersPage.totalUsers,
    isFetching: state.usersPage.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribe: (userId) => {
      dispatch(subscribeAC(userId));
    },
    unsubscribe: (userId) => {
      dispatch(unsubscribeAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsers: (user) => {
      dispatch(setTotalUsersAC(user));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiContainer);

export default UsersContainer;
