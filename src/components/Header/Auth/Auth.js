import React from "react";
import s from "./Auth.module.css";
import {authAPI} from "../../../api/api"
import { NavLink } from "react-router-dom";

const Auth = (props) => {
  if (props.authData) {
    return (
      <div className={s.auth}>
        <div> hi, {props.authData.login}</div>
        <div onClick={()=> props.logout()}>logout</div>
      </div>
    );
  }
  return (
    <div className={s.auth}>
      <NavLink to="/login">login</NavLink>
    </div>
  );
};

export default Auth;
