import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../state/profile-reducer.js";

function MyPostContainer(props) {
  const state = props.store.getState();

  function changeNewPost(text) {
    props.store.dispatch(updateNewPostActionCreator(text));
  }

  function createPost() {
    props.store.dispatch(addPostActionCreator());
  }

  return (
    <MyPosts
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
      changeNewPost={changeNewPost}
      createPost={createPost}
    />
  );
}

export default MyPostContainer;
