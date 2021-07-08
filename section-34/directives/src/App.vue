<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'some text'"></p>
                <div v-html="'<strong>Some text in bold</strong>'"></div>
            </div>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background="'red'">Change background colour (by setting explicit background directive arg)</p>
                <p v-highlight:background.delayed="'red'">Delay changing background colour (using modifiers)</p>
                <p v-highlight="'red'">Change text colour (default)</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
