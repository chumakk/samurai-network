import React from "react";
import Header from "./Header";
import s from "./Header.module.css";
import { connect } from "react-redux";
import { authTC, logoutTC } from "../../state/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header authData={this.props.authData} logout={this.props.logoutTC} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth.authData,
  };
};
export default connect(mapStateToProps, {
  authTC,
  logoutTC,
})(HeaderContainer);
