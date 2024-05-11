import axios from "axios";
import { useCounterStore } from "../store/counter";
const http = axios.create({
  baseURL: "https://faceprog.ru/reactcourseapi",
});

http.interceptors.response.use((r) => {
  const counterStore = useCounterStore();
  console.log(`request done, counter init is ${counterStore.count}`);
  return r;
});

export default http;
