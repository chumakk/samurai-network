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
  addPageAC,
  addOnePageUsersAC,
} from "../../state/users-reducer";
import * as axios from "axios";

class UsersApiContainer extends React.Component {
  constructor(props) {
    super(props);
    this.selectPage = this.selectPage.bind(this);
    this.showMore = this.showMore.bind(this);
  }
  componentDidMount() {
    this.props.toggleIsFetching(true);
    const currentPage = this.props.currentPage[0];
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersOnPage}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsers(response.data.totalCount);
      });
  }
  componentWillUnmount() {
    this.props.setPage(1);
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
  showMore() {
    this.props.toggleIsFetching(true);

    const nextPage =
      this.props.currentPage[this.props.currentPage.length - 1] + 1;
    this.props.addPage(nextPage);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.usersOnPage}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.addOnePageUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
        <Users
          users={this.props.users}
          currentPage={this.props.currentPage}
          totalUsers={this.props.totalUsers}
          usersOnPage={this.props.usersOnPage}
          selectPage={this.selectPage}
          subscribe={this.props.subscribe}
          unsubscribe={this.props.unsubscribe}
          showMore={this.showMore}
          isFetching = {this.props.isFetching}
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
    addPage: (page) => {
      dispatch(addPageAC(page));
    },
    addOnePageUsers: (users) => {
      dispatch(addOnePageUsersAC(users));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersApiContainer);

export default UsersContainer;
