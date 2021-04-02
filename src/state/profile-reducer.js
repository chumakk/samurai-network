import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";
const SET_CURRENT_URL = "SET_CURRENT_URL";
const SET_STATUS = "SET_STATUS";
const UPDATE_AVATAR_SUCCESS = "UPDATE_AVATAR_SUCCESS";

const initialState = {
  posts: [
    { id: 1, text: "Post1", countOfLikes: 10 },
    { id: 2, text: "Post2", countOfLikes: 15 },
    { id: 3, text: "Post3", countOfLikes: 11 },
    { id: 4, text: "Post4", countOfLikes: 222 },
  ],
  profile: null,
  status: null,
  prevURL: null,
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST: {
      const post = {
        id: state.posts.length + 1,
        text: action.text,
        countOfLikes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, post],
        newPostText: "",
      };
    }
    case SET_PROFILE_INFO: {
      return { ...state, profile: action.profile };
    }

    case SET_CURRENT_URL:
      return { ...state, prevURL: action.url };

    case SET_STATUS:
      return { ...state, status: action.status };

    case UPDATE_AVATAR_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } };

    default:
      return state;
  }
}

export function addPostActionCreator(text) {
  return {
    type: ADD_POST,
    text,
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

export const getComponentProfile = (userId, profile) => (dispatch) => {
  if (userId || profile.id) {
    profileAPI
      .getProfile(userId || profile.id)
      .then((data) => dispatch(setProfileInfoAC(data)));
  }
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

const updateAvatarSuccess = (photos) => ({
  type: UPDATE_AVATAR_SUCCESS,
  photos,
});

export const getStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => dispatch(setStatus(response.data)));
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.setStatus(status).then((response) => dispatch(setStatus(status)));
};

export const updateAvatar = (avatar) => async (dispatch) => {
  const response = await profileAPI.setAvatar(avatar);
  dispatch(updateAvatarSuccess(response.data.data.photos));
};

export default profileReducer;
