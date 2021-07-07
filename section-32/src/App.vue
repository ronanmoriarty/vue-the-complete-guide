<template>
  <div class="container">
    <app-progress :progress="progress"></app-progress>
    <app-new-quote @quoteAdded="quoteAdded"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it.</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
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
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
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
