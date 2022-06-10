<template>
  <div class="App">
    <button @click="setState({ type: 'success' })">success</button>
    <button @click="setState({ type: 'error' })">error</button>
    <button @click="setState({ type: 'warning' })">warning</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      state: true,
    };
  },
  methods: {
    setState({ type }) {
      this.$message({
        message: "This is test content",
        type,
        duration: 3000,
      });
    },
  },
};
</script>
<style>
</style>