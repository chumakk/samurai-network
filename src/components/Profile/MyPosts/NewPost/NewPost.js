import React from "react";
import s from "./NewPost.module.css";


function NewPost(props) {
  let newref = React.createRef();

  function onCreatePost() {
    props.createPost();
    // props.dispatch(addPostActionCreator());
  }
  function onChangeNewPost() {
    const text = newref.current.value;
    props.changeNewPost(text);
    // props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div>
      <textarea
        onChange={onChangeNewPost}
        value={props.newPostText}
        ref={newref}
      ></textarea>
      <div>
        <button onClick={onCreatePost}>Add post</button>
      </div>
    </div>
  );
}

export default NewPost;
