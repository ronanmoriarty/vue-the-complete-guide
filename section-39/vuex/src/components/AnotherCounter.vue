<template>
    <div>
        <button class="btn btn-primary" @click="incrementAsync({by: 100, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="decrementAsync({by: 100})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapActions({
                incrementAsync: types.INCREMENT_ASYNC,
                decrementAsync: types.DECREMENT_ASYNC
            })
        }
    }
</script>