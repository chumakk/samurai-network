let state = {
  profilePage: {
    posts: [
      { id: 1, text: "Post1", countOfLikes: 10 },
      { id: 2, text: "Post2", countOfLikes: 15 },
      { id: 3, text: "Post3", countOfLikes: 11 },
      { id: 4, text: "Post4", countOfLikes: 222 },
    ],
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
  },
};

export default state;
