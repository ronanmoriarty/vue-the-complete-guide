<template>
    <li class="list-group-item" @click="selected">
        <p>Server #{{ id }}</p>
        <p>Status: {{ status }}</p>
    </li>
</template>

<script>
    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            status: {
                type: String,
                required: true
            }
        },
        methods: {
            selected() {
                this.$emit('selected', this.id);
            }
        }
    }
</script>
