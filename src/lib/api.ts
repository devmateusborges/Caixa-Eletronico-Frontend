import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-blog-adv.onrender.com",
});
