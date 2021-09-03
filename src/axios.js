import axios from "axios";

const instance = axios.create({
  //Run 'firebase emulators:start' inside functions use the url(api endpoint) provided below
  baseURL: "",
});

export default instance;
