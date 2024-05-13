<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  value: { type: String, required: true },
  valid: { type: Boolean, required: true },
  label: { type: String, required: true },
});

const emit = defineEmits(["input"]);

const activated = ref(false);

function onInput(e) {
  activated.value = true;
  emit("input", e.target.value.trim());
}
</script>

<template>
  <div class="form-group">
    <label>
      {{ label }}
      <span v-if="activated">Here was fa icons</span>
    </label>
    <input :value="value" @input="onInput" type="text" class="form-control" />
  </div>
</template>
