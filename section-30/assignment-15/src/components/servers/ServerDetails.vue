<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="id">Server #{{ id }}</p>
    <p v-else>No server selected</p>
    <button @click="reset">Reset to Normal</button>
  </div>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    data: function() {
      return {
        id: undefined
      }
    },
    methods: {
      reset() {
        eventBus.$emit('reset', this.id);
      }
    },
    created() {
      eventBus.$on('selected', (id) => {
        this.id = id;
      });
    }
  }
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
