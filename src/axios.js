import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-b8b03/us-central1/api",
});

export default instance;
