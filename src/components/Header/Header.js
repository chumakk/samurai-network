import React from "react";
import icon from "./icon.png";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import Auth from "./Auth/Auth";

function Header(props) {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <img src={icon} alt="icon" />
      </NavLink>
      <h1>Social-Network.samurai</h1>
      <Auth authData={props.authData} />
    </header>
  );
}

export default Header;
