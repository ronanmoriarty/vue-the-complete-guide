<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <!-- <li class="list-group-item" v-for="index in 5">Server #{{ index }}</li> -->
      <server v-for="server in servers"
        :key="server.id"
        :id="server.id"
        :status="server.status"
        @selected="selected = $event"
      ></server>
    </ul>
  </div>
</template>

<script>
import Server from './Server.vue';
import { eventBus } from '../../main';

export default {
  data: function () {
    return {
      servers: [
        { id: 1, status: 'Normal' },
        { id: 2, status: 'Critical' },
        { id: 3, status: 'Unknown' },
        { id: 4, status: 'Normal' }
      ],
      selected: undefined
    }
  },
  components: {
    'server': Server
  },
  created() {
      eventBus.$on('reset', (id) => {
        const selectedServer = this.servers.find(server => server.id === id);
        if(selectedServer) {
          selectedServer.status = 'Normal';
        } else {
          console.log(`No server found with id '${id}' to reset.`);
        }
      });
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>
