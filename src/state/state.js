const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: "Post1", countOfLikes: 10 },
        { id: 2, text: "Post2", countOfLikes: 15 },
        { id: 3, text: "Post3", countOfLikes: 11 },
        { id: 4, text: "Post4", countOfLikes: 222 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Kirill",
          avatar:
            "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg",
          lastMessage: "How are you doing?",
          timeLastMessage: "12:45 PM",
        },
        {
          id: 2,
          name: "Valera",
          avatar:
            "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png",
          lastMessage: "Hi",
          timeLastMessage: "12:45 PM",
        },
        {
          id: 3,
          name: "Maxim",
          avatar:
            "https://pm1.narvii.com/6857/8a2d4a8fe31b643fdc79925b12d36ef3b5d427cfv2_hq.jpg",
          lastMessage: "YO",
          timeLastMessage: "12:45 PM",
        },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you doing?" },
        { id: 3, message: "YO" },
      ],
      newMessageText: "",
    },
  },
  getState() {
    return this._state;
  },
  _renderPage() {
    console.log("I am zaglyshka");
  },
  subscribe(observer) {
    this._renderPage = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {

      const post = {
        id: this._state.profilePage.posts.length + 1,
        text: this._state.profilePage.newPostText,
        countOfLikes: 0,
      };
      this._state.profilePage.posts.push(post);
      this._state.profilePage.newPostText = "";
      this._renderPage(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      this._state.profilePage.newPostText = action.newText;
      this._renderPage(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {

      this._state.dialogsPage.newMessageText = action.message;
      this._renderPage(this._state);

    } else if (action.type === ADD_MESSAGE) {

      const message = {
        id: this._state.dialogsPage.messages.length + 1,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(message);
      this._state.dialogsPage.newMessageText = "";
      this._renderPage(this._state);
      
    }
  },
};

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

export function addNewMessage() {
  return {
    type: ADD_MESSAGE,
  };
}

export function updateNewMessageTextActionCreator(text) {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    message: text,
  };
}

window.state = store;
export default store;
