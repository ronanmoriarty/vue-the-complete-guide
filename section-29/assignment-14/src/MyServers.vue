<template>
  <div class="row">
    <my-server-list></my-server-list>
    <my-server-warning></my-server-warning>
  </div>
</template>

<script>
    import ServerList from './MyServersList.vue';
    import ServerWarning from './MyServerWarning.vue';
    export default {
        components: {
            'my-server-list': ServerList,
            'my-server-warning': ServerWarning
        }
    }
</script>
