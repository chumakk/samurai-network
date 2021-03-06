import React from "react";
import Header from "./Header";
import s from "./Header.module.css";
import { connect } from "react-redux";
import { authTC } from "../../state/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authTC();
  }
  render() {
    return <Header authData={this.props.authData} />;
  }
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth.authData,
  };
};
export default connect(mapStateToProps, {
  authTC,
})(HeaderContainer);
