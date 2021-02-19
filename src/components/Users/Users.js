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
  return (
    <div>
      <h3>Users</h3>
      {users}
      <div className={s.showMoreButtonWrapper}>
        <button className={s.showMoreButton}>Show more</button>
      </div>
    </div>
  );
}

export default Users;
