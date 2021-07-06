<template>
  <div class="container">
    <app-progress :progress="progress"></app-progress>
    <app-new @quoteAdded="quoteAdded"></app-new>
    <app-quotes :quotes="quotes"></app-quotes>
  </div>
</template>

<script>
import Quotes from "./components/Quotes.vue";
import New from "./components/New.vue";
import Progress from "./components/Progress.vue";

export default {
  data: function () {
    return {
      quotes: [
        "Just a quote to see something",
        "Some other quote",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqr",
        "stu"
      ],
      maxQuotes: 10,
    };
  },
  components: {
    appQuotes: Quotes,
    appNew: New,
    appProgress: Progress
  },
  computed: {
    progress: function () {
      return 100 * (this.quotes.length / this.maxQuotes);
    },
  },
  methods: {
    quoteAdded(quote) {
      if (this.quotes.length < this.maxQuotes) {
        this.quotes.push(quote);
      }
    },
  },
};
</script>

<style></style>
