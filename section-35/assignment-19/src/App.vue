<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h2>Exercise 1</h2>
                {{ text | reverse }}

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h2>Exercise 2</h2>
                {{ text | appendLength }}
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h2>Exercise 3</h2>
                {{ reverse }}
                <br>
                {{ textWithLength }}

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h2>Exercise 4</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Hello'
            };
        },
        filters: {
            reverse(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reverse() {
                return this.text.split("").reverse().join("");
            },
            textWithLength() {
                return `${this.text} (${this.text.length})`;
            }
        }
    }
</script>

<style>
</style>
