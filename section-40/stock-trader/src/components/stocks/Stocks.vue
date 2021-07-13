<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
      ...mapGetters([
          'stocks'
      ])
  },
  components: {
    appStock: Stock,
  }
};
</script>
