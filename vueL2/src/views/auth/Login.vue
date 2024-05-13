<script setup>
import { computed, inject, reactive } from "vue";
import AppInput from "./../../components/Input.vue";
const { login } = inject('api').auth;

const form = reactive([
  { label: "Email", name: "email", value: "", pattern: /.+/ },
  { label: "Password", name: "password", value: "", pattern: /.+/ },
]);

form.forEach((field) => {
  field.valid = false;
});

const fieldsDone = computed(() =>
  form.reduce((t, field) => t + (field.valid ? 1 : 0), 0)
);
const fieldsValid = computed(() => fieldsDone.value >= form.length);

function onInput(i, val) {
  let field = form[i];
  field.value = val;
  field.valid = field.pattern.test(field.value);
}

async function tryLogin() {
  const data = Object.fromEntries(form.map((f) => [f.name, f.value]));
  const loginRes = await login(data);
  if (loginRes) {
    document.location = "/catalog";
  } else {
    console.log("error login");
  }
}
</script>

<template>
  <div class="container">
    <h1>Страница логина</h1>
    {{ form }}
    <AppInput v-for="(field, i) in form" :value="field.value" :valid="field.valid" :label="field.label" class="mb-3"
      @input="onInput(i, $event)" />
    <button @click="tryLogin" class="btn btn-primary" :disabled="!fieldsValid">
      Login
    </button>
  </div>
</template>

<style scoped></style>
