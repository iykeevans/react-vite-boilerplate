import axios from "axios";
import { crushToken } from "../utils/manageToken";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// DELETE EXPIRED TOKEN
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      return crushToken("token");
    }

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      crushToken("token");
      window.location.href = "/login";
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
