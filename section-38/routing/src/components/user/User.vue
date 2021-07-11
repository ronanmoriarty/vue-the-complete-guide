<template>
    <div>
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome">Go To Home</button>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push('/');
            // Alternatively, we can pass an object...
            // this.$router.push({ path: '/'});
        }
    }
}
</script>
