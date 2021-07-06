<template>
  <div class="container">
    <app-new @quoteAdded="quoteAdded"></app-new>
    <app-quotes :quotes="quotes"></app-quotes>
  </div>
</template>

<script>
import Quotes from "./components/Quotes.vue";
import New from "./components/New.vue";

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
  },
  computed: {
    progress: function () {
      return this.quotes.length;
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
