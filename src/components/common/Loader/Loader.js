import React from "react";

const Loader = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        link="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "transparent",
          display: "block",
        }}
        width="18px"
        height="18px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="84" cy="50" r="10" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.4464285714285714s"
            calcMode="spline"
            keyTimes="0;1"
            values="10;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="1.7857142857142856s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#ffffff;#ffffff;#ffffff;#ffffff;#ffffff"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.7857142857142856s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.7857142857142856s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          ></animate>
        </circle>
        <circle cx="50" cy="50" r="10" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.7857142857142856s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.4464285714285714s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.7857142857142856s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.4464285714285714s"
          ></animate>
        </circle>
        <circle cx="84" cy="50" r="10" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.7857142857142856s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.8928571428571428s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.7857142857142856s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.8928571428571428s"
          ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#ffffff">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="1.7857142857142856s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.3392857142857142s"
          ></animate>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1.7857142857142856s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.3392857142857142s"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default Loader;
