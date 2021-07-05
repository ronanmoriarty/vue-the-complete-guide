<template>
  <div class="col-xs-12 col-sm-6">
    <div v-if="id">
      <p>Server #{{ id }}</p>
      <p>Status: {{ status }}</p>
    </div>
    <p v-else>No server selected</p>
    <button @click="reset">Reset to Normal</button>
  </div>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    data: function () {
      return {
        id: undefined,
        status: undefined
      }
    },
    methods: {
      reset() {
        this.status = 'Normal';
        eventBus.$emit('reset', this.id);
      }
    },
    created() {
      eventBus.$on('selectedServer', (server) => {
        this.id = server.id;
        this.status = server.status;
      });
    }
  }
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
