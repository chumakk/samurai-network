import { authAPI, profileAPI, secureApi } from "../api/api";

const SET_IS_AUTH = "SET_IS_AUTH";
const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_AUTH_PROFILE = "SET_AUTH_PROFILE";
const SET_CAPTCHA_SUCCESS = "SET_CAPTCHA_SUCCESS";

const initialState = {
  isAuth: false,
  authData: null,
  authProfile: null,
  captcha: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_AUTH:
      return { ...state, isAuth: action.isAuth };

    case SET_AUTH_DATA:
      return { ...state, authData: action.data };

    case SET_AUTH_PROFILE:
      return { ...state, authProfile: action.profile };

    case SET_CAPTCHA_SUCCESS:
      return { ...state, captcha: action.url };

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

export const setCaptchaSuccess = (url) => ({
  type: SET_CAPTCHA_SUCCESS,
  url,
});

export const authTC = () => (dispatch) => {
  return authAPI.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthData(response.data.data));
      dispatch(setIsAuth(true));
      profileAPI.getProfile(response.data.data.id).then((data) => {
        dispatch(setAuthProfile(data));
      });
    }
  });
};

export const logoutTC = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthData(null));
      dispatch(setIsAuth(false));
      dispatch(setAuthProfile(null));
    } else {
      alert("something wrong with logout");
    }
  });
};

export const loginTC = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === 0) {
    dispatch(authTC());
  } else if (data.resultCode === 10) {
    dispatch(getCaptcha());
  } else {
    return data.messages[0];
  }
};

export const getCaptcha = () => async (dispatch) => {
  const req = await secureApi.getCaptcha();
  dispatch(setCaptchaSuccess(req.data.url));
};

export default authReducer;
