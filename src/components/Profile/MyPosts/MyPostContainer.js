import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../state/profile-reducer.js";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeNewPost: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    createPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;
