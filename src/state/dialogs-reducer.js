const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
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
};

function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.message,
      };
    }
    case ADD_MESSAGE:
      const message = {
        id: state.messages.length + 1,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, message],
        newMessageText: "",
      };

    default:
      return state;
  }
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

export default dialogsReducer;
