import React from "react";
import icon from "./icon.png";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <img src={icon} alt="icon" />
      </NavLink>
      <h1>Social-Network.samurai</h1>
    </header>
  );
}

export default Header;
