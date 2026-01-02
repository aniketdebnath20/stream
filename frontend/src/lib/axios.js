import axios from "axios";

// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";
const BASE_URL = "https://stream-xi.vercel.app/api"

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

// stream-xi.vercel.app