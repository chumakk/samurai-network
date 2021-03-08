import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const WithAuthRedirect = (Component) => {
  const ComponentWrapper = (props) => {
    return !props.isAuth ? <Redirect to="login" /> : <Component {...props} />;
  };

  return connect(mapStateToProps)(ComponentWrapper);
};

export default WithAuthRedirect;
