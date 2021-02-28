import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer.js";
import dialogsReducer from "./dialogs-reducer.js";
import usersReducer from "./users-reducer.js";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
