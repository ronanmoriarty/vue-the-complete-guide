<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "Apple", price: 100 },
        { id: 2, name: "Microsoft", price: 120 },
        { id: 3, name: "Google", price: 140 },
        { id: 4, name: "Amazon", price: 160 },
      ],
    };
  },
  components: {
    appStock: Stock,
  },
};
</script>
