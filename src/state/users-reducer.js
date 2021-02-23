const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
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
  currentPage: 1,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id == action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNSUBSCRIBE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id == action.userId) {
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
      return { ...state, currentPage: action.currentPage };

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

export default usersReducer;
