<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" :key="quote" @click.native="remove(index)">
      <span>{{ quote }}</span>
    </app-quote>
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
    remove(index) {
        this.$emit('quoteDeleted', index);
    }
  }
};
</script>
