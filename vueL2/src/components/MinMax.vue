<template>
  <div>
    <button @click="onUpdate(value - 1)" :disabled="value <= min && disabledNearMin" class="btn btn-danger">
      -
    </button>
    <input ref="inp" :value="value" @change="onUpdate(+$event.target.value)" class="mx-2" :class="$style.inputCnt"
      type="text" />
    <button @click="onUpdate(value + 1)" :disabled="value >= max && disabledNearMax" class="btn btn-success">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    value: { type: Number, required: true },
    disabledNearMin: { type: Boolean, default: true },
    disabledNearMax: { type: Boolean, default: true },
  },
  emits: ["change"],
  methods: {
    onUpdate(newCnt) {
      const realCnt = isNaN(newCnt)
        ? this.min
        : Math.min(Math.max(newCnt, this.min), this.max);
      this.$emit("change", realCnt);
      // this.$forceUpdate();

      this.$nextTick(() => {
        // console.log("tick");
        if (this.value.toString() != this.$refs.inp.value) {
          // console.log("force");
          this.$forceUpdate();
        }
      });
    },
  },
};
</script>

<style module>
.inputCnt {
  width: 50px;
}
</style>
