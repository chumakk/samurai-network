import React from "react";
import s from "./NewPost.module.css";

function NewPost() {
  let newref = React.createRef();
  return (
    <div>
      <textarea ref={newref}></textarea>
      <div>
        <button onClick={() => alert(newref.current.value)}>Add post</button>
      </div>
    </div>
  );
}

export default NewPost;