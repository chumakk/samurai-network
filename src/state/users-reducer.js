import API from "../api/api";

const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const ADD_PAGE = "ADD_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const ADD_ONE_PAGE_USERS = "ADD_ONE_PAGE_USERS";
const TOGGLE_USERS_IN_PROCESS = "TOGGLE_USERS_IN_PROCESS";

// const initialState = {
//   users: [
//     {
//       id: 1,
//       name: "Chumachenko Kirill",
//       photos: {
//         small:
//           "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
//       },
//       status: "I'm learning React !!!",
//       followed: false,
//       location: { country: "Ukraine", city: "Kiev" },
//     },
//     {
//       id: 2,
//       name: "Dmitry Nagiev",
//       photos: {
//         small:
//           "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png",
//       },
//       status: "I'm so busy for last time...",
//       followed: false,
//       location: { country: "Ukraine", city: "Odessa" },
//     },
//     {
//       id: 3,
//       name: "Savchenko Maxim",
//       photos: {
//         small:
//           "https://pm1.narvii.com/6857/8a2d4a8fe31b643fdc79925b12d36ef3b5d427cfv2_hq.jpg",
//       },
//       status: "I'm tired.",
//       followed: false,
//       location: { country: "Ukraine", city: "Lviv" },
//     },
//   ],
// };

const initialState = {
  users: [],
  usersOnPage: 5,
  totalUsers: 0,
  currentPages: [1],
  isFetching: false,
  usersInProccess: [],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNSUBSCRIBE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_TOTAL_USERS:
      return { ...state, totalUsers: action.totalUsers };

    case SET_CURRENT_PAGE:
      return { ...state, currentPages: [action.currentPage] };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case ADD_PAGE:
      return { ...state, currentPages: [...state.currentPages, action.page] };

    case ADD_ONE_PAGE_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    case TOGGLE_USERS_IN_PROCESS:
      return {
        ...state,
        usersInProccess: action.toggle
          ? [...state.usersInProccess, action.userId]
          : state.usersInProccess.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
}

export const subscribeAC = (userId) => {
  return {
    type: SUBSCRIBE,
    userId: userId,
  };
};

export const unsubscribeAC = (userId) => {
  return {
    type: UNSUBSCRIBE,
    userId: userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export const setTotalUsersAC = (totalUsers) => {
  return {
    type: SET_TOTAL_USERS,
    totalUsers,
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};

export const addPageAC = (page) => {
  return {
    type: ADD_PAGE,
    page,
  };
};

export const addOnePageUsersAC = (users) => {
  return {
    type: ADD_ONE_PAGE_USERS,
    users,
  };
};

export const toggleUsersInProcess = (userId, toggle) => {
  return {
    type: TOGGLE_USERS_IN_PROCESS,
    userId,
    toggle,
  };
};

export const followThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleUsersInProcess(userId, true));
  API.follow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(subscribeAC(userId));
      dispatch(toggleUsersInProcess(userId, false));
    }
  });
};

export const unfollowThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleUsersInProcess(userId, true));
  API.unfollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unsubscribeAC(userId));
    }
    dispatch(toggleUsersInProcess(userId, false));
  });
};

export function getUsersTC(currentPages, usersOnPage) {
  return function getUsers(dispatch) {
    dispatch(toggleIsFetchingAC(true));
    const currentPage = currentPages[0];
    API.getUsers(currentPage, usersOnPage).then((data) => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersAC(data.totalCount));
    });
  };
}

export const getUsersOnOnePageTC = (number, usersOnPage) => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  dispatch(setCurrentPageAC(number));
  API.getUsers(number, usersOnPage).then((data) => {
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(data.items));
  });
};

export const shoMoreTC = (currentPages, usersOnPage) => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));

  const nextPage = currentPages[currentPages.length - 1] + 1;
  dispatch(addPageAC(nextPage));

  API.getUsers(nextPage, usersOnPage).then((data) => {
    dispatch(toggleIsFetchingAC(false));
    dispatch(addOnePageUsersAC(data.items));
  });
};

export default usersReducer;
