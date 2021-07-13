<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.name" :name="stock.name" :price="stock.price"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    return {
      stocks: [
        { name: "Apple", price: 100 },
        { name: "Microsoft", price: 120 },
        { name: "Google", price: 140 },
        { name: "Amazon", price: 160 },
      ],
    };
  },
  components: {
    appStock: Stock,
  },
};
</script>
