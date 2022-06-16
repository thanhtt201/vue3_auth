import { axiosClient } from "./axiosClient";

const userApiClient = {
  getAll: () => {
    const url = "";
    return axiosClient.get(url);
  },
  register: (payload) => {
    const url = "/auth/register";
    return axiosClient.post(url, payload);
  },
  login: (payload) => {
    const url = "/auth/login";
    return axiosClient.post(url, payload);
  },
};

export default userApiClient;
