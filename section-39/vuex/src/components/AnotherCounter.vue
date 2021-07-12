<template>
    <div>
        <button class="btn btn-primary" @click="incrementAsync({by: 100, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="decrementAsync({by: 100})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'incrementAsync',
                'decrementAsync'
            ])
        }
    }
</script>