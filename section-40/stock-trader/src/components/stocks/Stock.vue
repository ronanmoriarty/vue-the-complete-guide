<template>
  <div class="panel panel-default col-sm-6">
    <div class="panel-heading">
        <h1 class="panel-title">{{ name }}</h1>
    </div>
    <div class="panel-body">
        <div class="col-sm-9">
            <form>
                <div class="form-group">
                    <label for="sharesToBuy">Shares To Buy:</label>
                    <input type="text" id="sharesToBuy" class="form-control" v-model="sharesToBuy">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click="buy">Buy</button>
                </div>
            </form>
        </div>
        <div class="col-sm-3">
            Price: {{ price }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          sharesToBuy: undefined
      }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  methods: {
      buy() {
          // replace with action later
          alert(this.sharesToBuy);
      }
  }
};
</script>

<style scoped>
    /* .panel {
        margin: 20px;
    } */
</style>