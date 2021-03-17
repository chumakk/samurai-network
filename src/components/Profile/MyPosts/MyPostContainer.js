import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import {
  addPostActionCreator,
} from "../../../state/profile-reducer.js";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;
