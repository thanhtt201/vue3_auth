import axios from "axios";
// import "dotenv/config";

export const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
