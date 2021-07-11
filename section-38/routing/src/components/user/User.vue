<template>
    <div>
    <h1>The User Page</h1>
    <hr>
    <p>Loaded id: {{ id }}</p>
    <button @click="navigateToHome">Go To Home</button>
</div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        '$route'(to, from) {
            this.id = to.params.id;
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push('/');
            // Alternatively, we can pass an object...
            // this.$router.push({ path: '/'});
        }
    }
}
</script>
