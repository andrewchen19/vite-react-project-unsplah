import axios from "axios";
const APIKey = import.meta.env.VITE_REACT_APP_MY_API;

// create custom Axios instance
const customFetch = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${APIKey}`,
  },
});

export default customFetch;
