<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="progressStyle"
        >
          <span>{{ quoteCount }} / {{ maxQuotes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quoteCount: {
      type: Number,
      required: true
    },
    maxQuotes: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressStyle() {
      const progress = 100 * this.quoteCount / this.maxQuotes;
      return {
        "aria-valuenow": progress,
        width: `${progress}%`,
        transition: "width 0.4s ease-in-out",
      };
    },
  },
};
</script>
