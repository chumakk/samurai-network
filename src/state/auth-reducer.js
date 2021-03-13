import { API, profileAPI } from "../api/api";

const SET_IS_AUTH = "SET_IS_AUTH";
const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_AUTH_PROFILE = "SET_AUTH_PROFILE";

const initialState = {
  isAuth: false,
  authData: null,
  authProfile: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.isAuth };

    case SET_AUTH_DATA:
      return { ...state, authData: action.data };

    case SET_AUTH_PROFILE:
      return { ...state, authProfile: action.profile };

    default:
      return state;
  }
}

export const setIsAuth = (isAuth) => {
  return { type: SET_IS_AUTH, isAuth };
};
export const setAuthData = (data) => {
  return { type: SET_AUTH_DATA, data };
};
export const setAuthProfile = (profile) => {
  return { type: SET_AUTH_PROFILE, profile };
};

export const authTC = () => (dispatch) => {
  API.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthData(response.data.data));
      dispatch(setIsAuth(true));
      profileAPI.getProfile(response.data.data.id).then((data) => {
        dispatch(setAuthProfile(data));
      });
    }
  });
};

export default authReducer;
