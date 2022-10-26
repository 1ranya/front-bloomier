import axios from "axios";

export default axios.create({
  baseURL: "https://bloomier-service.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  },
});