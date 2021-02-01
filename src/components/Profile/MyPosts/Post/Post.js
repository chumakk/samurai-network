import React from "react";
import s from "./Post.module.css";

export default function Post() {
  return <div className={s.item}>
        <img src="https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg" alt="картинка поста" />
        Post
        <span> Like</span>
  </div>;
}
