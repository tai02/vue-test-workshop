<template>
  <div></div>
</template>

<script>
export default {
  name: "Emitter",

  methods: {
    emitEvent(str) {
      this.$emit("myEvent", "name", "password", str);
    }
  }
};
</script>

<style scoped></style>
