import React from "react";
import Profile from "./Profile";
import { setProfileInfoAC } from "../../state/profile-reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as axios from "axios";

class ProfileComponent extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => this.props.setProfileInfo(response.data));
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfileInfo: (profile) => {
      dispatch(setProfileInfoAC(profile));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileComponent));
