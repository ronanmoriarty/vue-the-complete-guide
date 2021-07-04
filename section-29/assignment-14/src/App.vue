<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <my-servers></my-servers>
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
    import Servers from './MyServers.vue';

    export default {
        components: {
            'my-header': Header,
            'my-servers': Servers
        }
    }
</script>

<style>

</style>
