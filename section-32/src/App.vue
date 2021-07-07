<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="quoteAdded"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a quote to delete it.</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";

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
    appHeader: Header,
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  },
  methods: {
    quoteAdded(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        alert(`Maximum number of quotes ${this.maxQuotes} reached.`);
        return;
      }

      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
};
</script>
