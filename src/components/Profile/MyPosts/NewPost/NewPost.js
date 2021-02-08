import React from "react";
import s from "./NewPost.module.css";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../state/state.js"


function NewPost(props) {
  let newref = React.createRef();

  function createPost() {
    props.dispatch(addPostActionCreator());
  }
  function onChange() {
    const text = newref.current.value;
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div>
      <textarea
        onChange={onChange}
        value={props.state.newPostText}
        ref={newref}
      ></textarea>
      <div>
        <button onClick={createPost}>Add post</button>
      </div>
    </div>
  );
}

export default NewPost;
