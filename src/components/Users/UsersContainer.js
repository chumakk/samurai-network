import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  setCurrentPageAC,
  followThunkCreator,
  unfollowThunkCreator,
  getUsersTC,
  getUsersOnOnePageTC,
  shoMoreTC,
} from "../../state/users-reducer";

class UsersApiContainer extends React.Component {
  constructor(props) {
    super(props);
    this.selectPage = this.selectPage.bind(this);
    this.showMore = this.showMore.bind(this);
  }
  componentDidMount() {
    this.props.getUsers(this.props.currentPages, this.props.usersOnPage);
  }
  componentWillUnmount() {
    this.props.setPage(1);
  }
  selectPage(number) {
    this.props.getUsersOnOnePage(number, this.props.usersOnPage);
  }
  showMore() {
    this.props.getShowMoreUsers(
      this.props.currentPages,
      this.props.usersOnPage
    );
  }
  render() {
    return (
      <div>
        <Users
          users={this.props.users}
          currentPages={this.props.currentPages}
          totalUsers={this.props.totalUsers}
          usersOnPage={this.props.usersOnPage}
          selectPage={this.selectPage}
          showMore={this.showMore}
          isFetching={this.props.isFetching}
          usersInProccess={this.props.usersInProccess}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPages: state.usersPage.currentPages,
    usersOnPage: state.usersPage.usersOnPage,
    totalUsers: state.usersPage.totalUsers,
    isFetching: state.usersPage.isFetching,
    usersInProccess: state.usersPage.usersInProccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    followThunk: (userId) => {
      dispatch(followThunkCreator(userId));
    },
    unfollowThunk: (userId) => {
      dispatch(unfollowThunkCreator(userId));
    },
    getUsers: (currentPages, usersOnPage) => {
      dispatch(getUsersTC(currentPages, usersOnPage));
    },
    getUsersOnOnePage: (number, usersOnPage) => {
      dispatch(getUsersOnOnePageTC(number, usersOnPage));
    },
    getShowMoreUsers: (currentPages, usersOnPage) => {
      dispatch(shoMoreTC(currentPages, usersOnPage));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiContainer);

export default UsersContainer;
