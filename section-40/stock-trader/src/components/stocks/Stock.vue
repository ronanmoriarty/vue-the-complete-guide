<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
            {{ name }}
            <small>Price: {{ price }}</small>
        </h3>
      </div>
      <div class="panel-body">
            <div class="pull-left">
              <input
                type="number"
                id="sharesToBuy"
                class="form-control"
                placeholder="Quantity"
                v-model="sharesToBuy"
              />
            </div>
            <div class="pull-right">
              <button class="btn btn-success" @click="buy">Buy</button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sharesToBuy: undefined,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
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
    },
  },
};
</script>
