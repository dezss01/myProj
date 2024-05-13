export default function initErrorsAlerts(http, useCounterStore) {
  http.interceptors.response.use((r) => {
    const counterStore = useCounterStore();
    // console.log(`request done, counter init is ${counterStore.count}`);
    return r;
  });
}
