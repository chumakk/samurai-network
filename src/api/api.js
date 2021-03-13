import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "89b4de27-3731-48ed-bc88-5d2cec427697",
  },
});

export const API = {
  authMe: () => {
    return instance.get(`auth/me`);
  },

  getUsers: (currentPage, usersOnPage) => {
    return instance
      .get(`users?page=${currentPage}&count=${usersOnPage}`)
      .then((response) => response.data);
  },

  follow: (userId) => {
    return instance.post(`follow/${userId}`);
  },

  unfollow: (userId) => {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  getProfile: (id) => {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },

  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`);
  },

  setStatus: (status) => {
    return instance
      .put("profile/status", {
        status: status,
      })
      .then((response) => {
        if (response.resultCode === 0) {
          return response;
        }
      });
  },
};
