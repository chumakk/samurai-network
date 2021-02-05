import React from "react";
import s from "./Post.module.css";

function Post(props) {
  const postText = props.text;
  const postLikes = props.countOfLikes;
  return (
    <div className={s.item}>
      <img
        src="https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg"
        alt="картинка поста"
      />
      {postText}
      <div>
        <span>{postLikes}</span>&nbsp;likes
      </div>
    </div>
  );
}

export default Post;
