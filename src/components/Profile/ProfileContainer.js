import React from "react";
import Profile from "./Profile";
import {
  setProfileInfoAC,
  setCurrentURL,
  getComponentProfile,
  getStatus,
  updateStatus,
} from "../../state/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import WithAuthRedirect from "../HOC/withAuthRedirect";

class ProfileComponent extends React.Component {
  componentDidMount() {
    this.props.getComponentProfile(
      this.props.match.url,
      this.props.match.params.userId,
      this.props.authProfile
    );
    this.props.getStatus(
      this.props.match.params.userId || this.props.authProfile.userId
    );
    setCurrentURL(this.props.match.url);
  }

  componentDidUpdate() {
    if (this.props.prevURL !== this.props.match.url) {
      this.props.getComponentProfile(
        this.props.match.url,
        this.props.match.params.userId,
        this.props.authProfile
      );

      this.props.getStatus(
        this.props.match.params.userId || this.props.authProfile.userId
      );

      setCurrentURL(this.props.match.url);
    }
  }

  componentWillUnmount() {
    this.props.setProfileInfo(null);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    authProfile: state.auth.authProfile,
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
  };
};

export default compose(
  WithAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileComponent);
