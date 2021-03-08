import API from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";
const SET_CURRENT_URL = "SET_CURRENT_URL";

const initialState = {
  posts: [
    { id: 1, text: "Post1", countOfLikes: 10 },
    { id: 2, text: "Post2", countOfLikes: 15 },
    { id: 3, text: "Post3", countOfLikes: 11 },
    { id: 4, text: "Post4", countOfLikes: 222 },
  ],
  newPostText: "",
  profile: null,
  prevURL: null,
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      const post = {
        id: state.posts.length + 1,
        text: state.newPostText,
        countOfLikes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, post],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_PROFILE_INFO: {
      return { ...state, profile: action.profile };
    }

    case SET_CURRENT_URL:
      return { ...state, prevURL: action.url };

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

export function setProfileInfoAC(profile) {
  return {
    type: SET_PROFILE_INFO,
    profile,
  };
}

export function setCurrentURL(url) {
  return {
    type: SET_CURRENT_URL,
    url,
  };
}

export const getStartComponentProfile = (url, userId, profile) => (
  dispatch
) => {
  if (userId) {
    API.getProfile(userId).then((data) => dispatch(setProfileInfoAC(data)));
  }
  if (url === "/profile" && profile) {
    dispatch(setProfileInfoAC(profile));
  }
  dispatch(setCurrentURL(url));
};

export const getUpdatedComponentProfile = (
  prevURL,
  currentURL,
  userId,
  authProfile
) => (dispatch) => {
  if (prevURL !== currentURL) {
    if (userId) {
      API.getProfile(userId).then((data) => dispatch(setProfileInfoAC(data)));
    }
    if (currentURL === "/profile") {
      authProfile
        ? dispatch(setProfileInfoAC(authProfile))
        : dispatch(setProfileInfoAC(null));
    }
    dispatch(setCurrentURL(currentURL));
  }
};

export default profileReducer;
