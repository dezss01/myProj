import axios from "axios";

export default function createHttpPlugin() {
  const http = axios.create({
    baseURL: "https://faceprog.ru/reactcourseapi",
  });
  return http;
}
