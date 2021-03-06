import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "89b4de27-3731-48ed-bc88-5d2cec427697",
  },
});

const API = {
  authMe: () => {
    return instance.get(`auth/me`);
  },

  getProfile: (id) => {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },

  getUsers: (currentPage, usersOnPage) => {
    return instance
      .get(`users?page=${currentPage}&count=${usersOnPage}`)
      .then((response) => response.data);
  },

  follow: (userId) => {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },

  unfollow: (userId) => {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};

export default API;
