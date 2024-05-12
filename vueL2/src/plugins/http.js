import axios from "axios";
import { useCounterStore } from "../store/counter";

export default function createHttpPlugin(pinia) {
  const http = axios.create({
    baseURL: "https://faceprog.ru/reactcourseapi",
  });

  http.interceptors.response.use((r) => {
    const counterStore = useCounterStore(pinia);
    console.log(`request done, counter init is ${counterStore.count}`);
    return r;
  });

  return http;
}
