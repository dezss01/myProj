import axios from "axios";

const http = axios.create({
  baseURL: "https://faceprog.ru/reactcourseapi",
});

http.interceptors.response.use((r) => {
  console.log("request done");
  return r;
});

export default http;
