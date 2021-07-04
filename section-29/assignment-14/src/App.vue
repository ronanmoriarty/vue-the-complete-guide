<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <my-servers></my-servers>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from './MyHeader.vue';
    import Servers from './MyServers.vue';
    import Footer from './MyFooter.vue';

    export default {
        components: {
            'my-header': Header,
            'my-servers': Servers,
            'my-footer': Footer
        }
    }
</script>

<style>

</style>
