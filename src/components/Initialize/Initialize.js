import React from "react";
import s from "./Initialize.module.css";
import Preloader from "../common/Preloader/Preloader";

export const Initialize = () => {
  return (
    <div className={s.container}>
        <div className={s.wrapper}>
      <Preloader />
      </div>
    </div>
  );
};

export default Initialize;
