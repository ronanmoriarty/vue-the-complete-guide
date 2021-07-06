<template>
  <div class="container">
    <app-quotes :quotes="quotes"></app-quotes>
  </div>
</template>

<script>
import Quotes from "./components/Quotes.vue";
export default {
  data: function () {
    return {
      quotes: ["Just a quote to see something", "Some other quote"],
      maxQuotes: 10,
    };
  },
  components: {
    appQuotes: Quotes,
  },
  computed: {
    progress: function () {
      return this.quotes.length;
    },
  },
};
</script>

<style>

</style>
