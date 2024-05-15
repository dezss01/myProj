<script setup>
import { inject } from "vue";

const alertsStore = inject("store").useAlerts();
</script>

<template>
  <div class="box">
    <transition-group name="item" tag="div">
      <div class="item" v-for="alert in alertsStore.alerts" :key="alert.id">
        {{ alert.text }}
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.box {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  padding: 10px 10px 0 0;
}

.item {
  margin: 0 0 10px 0;
  background: #444;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 10px;
}

.item-enter-active {
  animation: fadeIn 0.5s;
}

.item-leave-active {
  animation: fadeOut 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
