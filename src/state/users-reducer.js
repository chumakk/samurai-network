const SUBSCRIBE = "SUBSCRIBE";
const UNSUBSCRIBE = "UNSUBSCRIBE";

const initialState = {
  users: [
    {
      id: 1,
      fullName: "Chumachenko Kirill",
      avatarUrl:
        "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
      status: "I'm learning React !!!",
      subscribed: false,
      location: { country: "Ukraine", city: "Kiev" },
    },
    {
      id: 2,
      fullName: "Dmitry Nagiev",
      avatarUrl:
        "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png",
      status: "I'm so busy for last time...",
      subscribed: false,
      location: { country: "Ukraine", city: "Odessa" },
    },
    {
      id: 3,
      fullName: "Savchenko Maxim",
      avatarUrl:
        "https://pm1.narvii.com/6857/8a2d4a8fe31b643fdc79925b12d36ef3b5d427cfv2_hq.jpg",
      status: "I'm tired.",
      subscribed: false,
      location: { country: "Ukraine", city: "Lviv" },
    },
  ],
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id == action.userId) {
            return { ...u, subscribed: true };
          }
          return u;
        }),
      };
    case UNSUBSCRIBE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id == action.userId) {
            return { ...u, subscribed: false };
          }
          return u;
        }),
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

export default usersReducer;
