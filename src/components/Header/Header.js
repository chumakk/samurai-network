import React from "react";
import icon from "./icon.png";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <a href="#">
        <img src={icon} alt="icon" />
      </a>
      <h1>Social-Network.samurai</h1>
    </header>
  );
}

export default Header;