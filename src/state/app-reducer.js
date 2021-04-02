import { authTC } from "./auth-reducer";
const INITIALIZED = "INITIALIZED";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initialize = () => ({ type: INITIALIZED });

export const initialization = () => (dispatch) => {
  const promise = dispatch(authTC());
  promise.finally(() => {
    dispatch(initialize());
  });
};

export default appReducer;
