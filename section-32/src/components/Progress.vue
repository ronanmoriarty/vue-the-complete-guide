<template>
  <div class="progress-container">
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
        width: `${this.progress}%`,
        transition: 'width 0.4s ease-in-out'
      };
    },
  },
};
</script>

<style scoped>
.progress-container {
    padding: 20px 0;
}

.progress-bar {
  margin: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
