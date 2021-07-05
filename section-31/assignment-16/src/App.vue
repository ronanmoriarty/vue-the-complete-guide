<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selected = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selected = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selected = 'appRed'">Load Red Template</button>
                <component :is="selected">
                    <p>This is the Content</p>
                </component>
                <hr>
                <!-- <app-blue>
                    <p>This is the Content</p>
                </app-blue>
                <app-green>
                    <p>This is the Content</p>
                </app-green>
                <app-red>
                    <p>This is the Content</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selected: 'appBlue'
            };
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            selectBlue() {
                this.selected = 'appBlue';
            },
            selectGreen() {
                this.selected = 'appGreen';
            },
            selectRed() {
                this.selected = 'appRed';
             }
        }
    }
</script>

<style>
</style>
