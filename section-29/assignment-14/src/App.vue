<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <div class="row">
            <my-server-list></my-server-list>
            <my-server-warning></my-server-warning>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './MyHeader.vue';
    import ServerList from './MyServersList.vue';
    import ServerWarning from './MyServerWarning.vue';

    export default {
        components: {
            'my-header': Header,
            'my-server-list': ServerList,
            'my-server-warning': ServerWarning
        }
    }
</script>

<style>

</style>
