import React from "react";
import Profile from "./Profile";
import {
  setProfileInfoAC,
  getStartComponentProfile,
  getUpdatedComponentProfile,
} from "../../state/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import WithAuthRedirect from "../HOC/withAuthRedirect";

class ProfileComponent extends React.Component {
  componentDidMount() {
    this.props.getStartComponentProfile(
      this.props.match.url,
      this.props.match.params.userId,
      this.props.authProfile
    );
  }

  componentDidUpdate() {
    this.props.getUpdatedComponentProfile(
      this.props.prevURL,
      this.props.match.url,
      this.props.match.params.userId,
      this.props.authProfile
    );
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfileInfo: (profile) => {
      dispatch(setProfileInfoAC(profile));
    },
    getStartComponentProfile: (url, userId, profile) => {
      dispatch(getStartComponentProfile(url, userId, profile));
    },
    getUpdatedComponentProfile: (
      prevURL,
      currentURL,
      userId,
      profile,
      authProfile
    ) => {
      dispatch(
        getUpdatedComponentProfile(
          prevURL,
          currentURL,
          userId,
          profile,
          authProfile
        )
      );
    },
  };
};

export default compose(
  WithAuthRedirect,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProfileComponent);
