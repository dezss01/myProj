import { reactive, ref } from "vue";
import { defineStore } from "pinia";

export default function createAlertsStore() {
  return defineStore("alerts", () => {
    const alerts = reactive([]);
    let alertsAI = 0;

    function push({ text, critical }) {
      const alert = {
        id: ++alertsAI,
        text,
        critical,
      };

      alerts.push(alert);
      if (!critical) {
        setTimeout(() => remove(alert.id), 5000);
      }
    }

    function remove(id) {
      const idx = alerts.findIndex((alert) => alert.id === id);
      alerts.splice(idx, 1);
    }
    return { alerts, push };
  });
}
