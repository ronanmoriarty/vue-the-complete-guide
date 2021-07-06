<template>
    <div class="quote">
        {{ quote }}
    </div>
</template>

<script>
export default {
    props: {
        quote: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .quote {
        width: 300px;
        height: 100px;
        margin: 20px;
        padding: 20px;
        text-align: center;
        border: 1px solid steelblue;
        font-family: 'Arizonia', sans-serif;
        font-size: 28px;
        overflow: hidden;
    }
</style>