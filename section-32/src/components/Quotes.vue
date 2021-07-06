<template>
  <div class="quotes">
    <app-quote v-for="quote in quotes" :key="quote" :quote="quote" @remove="remove"> </app-quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: {
    quotes: {
      type: Array,
      required: true,
    },
  },
  components: {
    appQuote: Quote,
  },
  methods: {
    remove(quote) {
        // console.log(`Remove ${quote}`);
        const index = this.quotes.findIndex(q => q === quote);
        if(index > -1) {
            this.quotes.splice(index, 1);
        }
    }
  }
};
</script>

<style scoped>
.quotes {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 800px;
}
</style>
