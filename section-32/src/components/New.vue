<template>
  <div>
    <input type="text" v-model="quote" />
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      quote: "",
    };
  },
  methods: {
      add() {
          this.$emit('quoteAdded', this.quote);
          this.quote = '';
      }
  }
};
</script>

<style scoped>
    div {
        padding: 20px;
        margin: 20px;
        border: 1px solid steelblue;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    input {
        border: none;
        width: calc(100% - 100px);
        margin: 0 10px;
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.05);
    }

    button {
        background-color: steelblue;
        width: 80px;
        height: 30px;
        color: #fff;
        border: none;
    }
</style>