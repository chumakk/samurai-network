import React from "react";
import s from "./Users.module.css";
import User from "./User/User.js";
import Preloder from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
function Users(props) {
  const users = props.users.map((u) => (
    <User
      key={u.id}
      user={u}
      usersInProccess={props.usersInProccess}
      followThunk={props.followThunk}
      unfollowThunk={props.unfollowThunk}
    />
  ));

  return (
    <div>
      <h3>Users</h3>
      <div>{users}</div>
      {props.isFetching ? <Preloder /> : null}
      <div className={s.showMoreButtonWrapper}>
        <button
          className={s.showMoreButton}
          onClick={props.showMore}
          disabled={
            props.currentPages[props.currentPages.length - 1] *
              props.usersOnPage >=
            props.totalUsers
              ? true
              : false
          }
        >
          Show more
        </button>
      </div>
      <div className={s.paginatorWrapper}>
        <Paginator
          totalItems={props.totalUsers}
          itemsOnPage={props.usersOnPage}
          currentPages={props.currentPages}
          selectPage={props.selectPage}
          countOfPages={10}
        />
      </div>
    </div>
  );
}

export default Users;
