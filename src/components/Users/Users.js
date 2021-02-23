import React from "react";
import s from "./Users.module.css";
import User from "./User/User.js";

function Users(props) {
  const users = props.users.map((u) => (
    <User
      key={u.id}
      user={u}
      subscribe={props.subscribe}
      unsubscribe={props.unsubscribe}
    />
  ));

  const usersPages = [];
  const pagesCount = Math.ceil(props.totalUsers / props.usersOnPage);

  for (let i = 1; i <= pagesCount; i++) {
    usersPages.push(
      <span
        key={i}
        className={
          props.currentPage == i
            ? `${s.pageButton} ${s.selected}`
            : s.pageButton
        }
        onClick={() => props.selectPage(i)}
      >
        {`${i} `}
      </span>
    );
  }

  return (
    <div>
      <h3>Users</h3>
      <div>{usersPages}</div>
      <div>{users}</div>
      <div className={s.showMoreButtonWrapper}>
        <button className={s.showMoreButton}>Show more</button>
      </div>
    </div>
  );
}

export default Users;
