import React, { useState } from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {

  const pages = [];
  const pagesCount = Math.ceil(props.totalItems / props.itemsOnPage);

  const [section, setSection] = useState(1);
  const leftBorderOfPages = (section - 1) * props.countOfPages;
  const rightBorderOfPages = section * props.countOfPages;

  for (let i = 1; i <= pagesCount; i++) {
    if (i > leftBorderOfPages && i <= rightBorderOfPages) {
      pages.push(
        <span
          key={i}
          className={
            props.currentPages.indexOf(i) !== -1
              ? `${s.pageButton} ${s.selected}`
              : s.pageButton
          }
          onClick={() => props.selectPage(i)}
        >
          {`${i} `}
        </span>
      );
    }
  }

  return (
    <div className={s.wrapper}>
      {section > 1 && (
        <button onClick={() => setSection((s) => s - 1)}>prev</button>
      )}
      {pages}
      {section * props.countOfPages * props.itemsOnPage < props.totalItems && (
        <button onClick={() => setSection((s) => s + 1)}>next</button>
      )}
    </div>
  );
};

export default Paginator;
