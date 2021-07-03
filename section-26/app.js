new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        yourHealth: 100,
        monsterHealth: 100,
        logs: []
    },
    methods: {
        startGame: function() {
            this.gameStarted = true;
            this.yourHealth = 100;
            this.monsterHealth = 100;
            this.logs = [];
        },
        attack: function() {
            this.inflictDamageOnMonster(3, 20);
            this.inflictDamageOnPlayer1(3, 20);
            this.checkIfGameOver();
        },
        specialAttack: function() {
            this.inflictDamageOnMonster(10, 40);
            this.inflictDamageOnPlayer1(10, 40);
            this.checkIfGameOver();
        },
        heal: function() {
            let healthBoost = Math.floor(Math.random() * 20);
            if(healthBoost + this.yourHealth > 100) {
                healthBoost = 100 - this.yourHealth;
            }
            this.yourHealth += healthBoost;
            this.inflictDamageOnPlayer1(20);
            this.checkIfGameOver();
        },
        inflictDamageOnMonster: function(lowerLimit, upperLimit) {
            const damage = this.getRandomDamage(lowerLimit, upperLimit);
            this.monsterHealth -= damage;
            if(this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.updateLog(`Player hits monster. Inflicts damage of ${damage}`);
        },
        inflictDamageOnPlayer1: function(lowerLimit, upperLimit) {
            const damage = this.getRandomDamage(lowerLimit, upperLimit);
            this.yourHealth -= damage;
            if(this.yourHealth < 0) {
                this.yourHealth = 0;
            }
            this.updateLog(`Monster hits player. Inflicts damage of ${damage}`);
        },
        checkIfGameOver: function() {
            if(this.yourHealth === 0 && this.monsterHealth === 0) {
                this.updateLog('Draw');
            } else if (this.yourHealth === 0) {
                this.updateLog('Monster won');
            } else if (this.monsterHealth === 0) {
                this.updateLog('You won');
            }

            if(this.yourHealth === 0 || this.monsterHealth === 0) {
                this.gameStarted = false;
            }
        },
        updateLog: function(message) {
            this.logs.push(message);
        },
        getRandomDamage: function(lowerLimit, upperLimit) {
            return Math.max(Math.floor(Math.random() * upperLimit) + 1, lowerLimit);
        },
        giveUp: function() {
            this.gameStarted = false;
            this.updateLog('Player gave up.');
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