new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        yourHealth: 100,
        monsterHealth: 100,
        normalAttackLimit: 20,
        specialAttackLimit: 40
    },
    methods: {
        startGame: function() {
            this.gameStarted = true;
            this.yourHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            this.inflictDamageOnMonster(this.normalAttackLimit);
            this.inflictDamageOnPlayer1(this.normalAttackLimit);
        },
        specialAttack: function() {
            this.inflictDamageOnMonster(this.specialAttackLimit);
            this.inflictDamageOnPlayer1(this.specialAttackLimit);
        },
        inflictDamageOnMonster: function(limit) {
            this.monsterHealth -= this.getRandomDamage(limit);
        },
        inflictDamageOnPlayer1: function(limit) {
            this.yourHealth -= this.getRandomDamage(limit);
        },
        getRandomDamage: function(limit) {
            return Math.floor(Math.random() * limit);
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