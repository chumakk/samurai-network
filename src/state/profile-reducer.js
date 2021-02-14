const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
  posts: [
    { id: 1, text: "Post1", countOfLikes: 10 },
    { id: 2, text: "Post2", countOfLikes: 15 },
    { id: 3, text: "Post3", countOfLikes: 11 },
    { id: 4, text: "Post4", countOfLikes: 222 },
  ],
  newPostText: "",
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      const post = {
        id: state.posts.length + 1,
        text: state.newPostText,
        countOfLikes: 0,
      };

      state.posts.push(post);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}

export function addPostActionCreator() {
  return {
    type: ADD_POST,
  };
}

export function updateNewPostActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
}

export default profileReducer;
