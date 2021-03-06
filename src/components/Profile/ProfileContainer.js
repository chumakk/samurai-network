import React from "react";
import Profile from "./Profile";
import {
  setProfileInfoAC,
  setCurrentURL,
  getComponentProfile,
  getStatus,
  updateStatus,
  updateAvatar,
} from "../../state/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import WithAuthRedirect from "../HOC/withAuthRedirect";

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
    this.setEditMode = this.setEditMode.bind(this);
  }
  componentDidMount() {
    this.props.getComponentProfile(
      this.props.match.params.userId,
      this.props.authData
    );

    this.props.getStatus(
      this.props.match.params.userId || this.props.authData.id
    );

    this.props.setCurrentURL(this.props.match.url);
  }

  componentDidUpdate() {
    if (this.props.prevURL !== this.props.match.url) {
      this.props.getComponentProfile(
        this.props.match.params.userId,
        this.props.authData
      );

      this.props.getStatus(
        this.props.match.params.userId || this.props.authData.id
      );

      this.props.setCurrentURL(this.props.match.url);
      this.setEditMode(false);
    }
  }

  setEditMode(editMode) {
    this.setState({ editMode: editMode });
  }

  componentWillUnmount() {
    this.props.setProfileInfo(null);
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        editMode={this.state.editMode}
        setEditMode={this.setEditMode}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    authData: state.auth.authData,
    prevURL: state.profilePage.prevURL,
    status: state.profilePage.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfileInfo: (profile) => {
      dispatch(setProfileInfoAC(profile));
    },
    setCurrentURL: (url) => {
      dispatch(setCurrentURL(url));
    },
    getComponentProfile: (url, userId, profile) => {
      dispatch(getComponentProfile(url, userId, profile));
    },
    getStatus: (userId) => {
      dispatch(getStatus(userId));
    },
    updateStatus: (status) => {
      dispatch(updateStatus(status));
    },
    updateAvatar: (avatar) => dispatch(updateAvatar(avatar)),
  };
};

export default compose(
  WithAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileComponent);
