import React from "react";
import s from "./Auth.module.css";
import { NavLink } from "react-router-dom";

const Login = (props) => {
  if (props.authData) {
    return (
      <div className={s.auth}>
        <div> hi, {props.authData.login}</div>
        <NavLink to="/logout">logout</NavLink>
      </div>
    );
  }
  return (
    <div className={s.auth}>
      <NavLink to="/login">login</NavLink>
    </div>
  );
};

export default Login;
