new Vue({
    el: '#app',
    data: {
        gameStarted: false
    },
    methods: {
        startGame: function() {
            this.gameStarted = true;
        }
    }
});