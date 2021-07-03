new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        yourHealth: 100,
        monsterHealth: 100
    },
    methods: {
        startGame: function() {
            this.gameStarted = true;
            this.yourHealth = 100;
            this.monsterHealth = 100;
        },
        giveUp: function() {
            this.gameStarted = false;
        }
    },
    computed: {
        yourHealthStyle: function() {
            return {
                width: `${this.yourHealth}%`
            }
        },
        monsterHealthStyle: function() {
            return {
                width: `${this.monsterHealth}%`
            }
        }
    }
});