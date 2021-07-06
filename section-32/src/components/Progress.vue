<template>
  <div class="container">
    <h1>Quotes</h1>
    <div class="progress-bar">
      <div :style="progressStyle">{{ progress }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
  computed: {
    progressStyle() {
      return {
        backgroundColor: "steelblue",
        width: `${this.progress}%`
      };
    },
  },
};
</script>

<style scoped>
.container {
  margin: 20px;
}

.progress-bar {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
