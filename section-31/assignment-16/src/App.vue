<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary">Load Blue Template</button>
                <button class="btn btn-success">Load Green Template</button>
                <button class="btn btn-danger">Load Red Template</button>
                <hr>
                <app-blue>
                    <h1>Some heading</h1>
                    <p>Some text</p>
                </app-blue>
                <app-green>
                    <h1>Some heading</h1>
                    <p>Some text</p>
                </app-green>
                <app-red>
                    <h1>Some heading</h1>
                    <p>Some text</p>
                </app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
