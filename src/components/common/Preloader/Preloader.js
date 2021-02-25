import React from "react";
import s from "./Preloader.module.css";

function Preloader() {
  return (
    <div className={s.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: "auto", background: "fff", display: "block" }}
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className={s.preloader}
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="rgba(NaN, NaN, NaN, 0)"
          strokeWidth="10"
          fill="none"
        ></circle>
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="#4473ff"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.36986301369863s"
            values="0 50 50;180 50 50;720 50 50"
            keyTimes="0;0.5;1"
          ></animateTransform>
          <animate
            attributeName="stroke-dasharray"
            repeatCount="indefinite"
            dur="1.36986301369863s"
            values="18.84955592153876 169.64600329384882;139.4867138193868 49.008845396000766;18.84955592153876 169.64600329384882"
            keyTimes="0;0.5;1"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}

export default Preloader;
