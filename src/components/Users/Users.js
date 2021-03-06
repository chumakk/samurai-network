import React from "react";
import s from "./Users.module.css";
import User from "./User/User.js";
import Preloder from "../common/Preloader/Preloader"; 
function Users(props) {
  const users = props.users.map((u) => (
    <User
      key={u.id}
      user={u}
      usersInProccess = {props.usersInProccess}
      followThunk = {props.followThunk}
      unfollowThunk = {props.unfollowThunk}
    />
  ));

  const usersPages = [];
  const pagesCount = Math.ceil(props.totalUsers / props.usersOnPage);

  for (let i = 1; i <= pagesCount; i++) {
    usersPages.push(
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

  return (
    <div>
      <h3>Users</h3>
      <div>{users}</div>
      {props.isFetching ? <Preloder /> : null}
      <div className={s.showMoreButtonWrapper}>
        <button className={s.showMoreButton} onClick={props.showMore}>
          Show more
        </button>
      </div>
      <div>{usersPages}</div>
    </div>
  );
}

export default Users;
