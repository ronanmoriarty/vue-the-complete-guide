<template>
  <div class="quotes">
    <app-quote v-for="quote in quotes" :key="quote" :quote="quote"> </app-quote>
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
};
</script>

<style scoped>
.quotes {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
