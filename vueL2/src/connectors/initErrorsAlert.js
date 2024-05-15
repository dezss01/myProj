export default function initErrorsAlerts(http, useAletsStore) {
  http.interceptors.response.use(
    (r) => r,
    (e) => {
      if ("errorStub" in e.config) {
        const { errorStub } = e.config;
        useAletsStore().push({
          text: "ошибка ответа от сервера " + (errorStub.text ?? ""),
          critical: errorStub.critical ?? false,
        });
        return {
          data: errorStub.fallback,
        };
      }
      return Promise.reject(e);
    }
  );
}
