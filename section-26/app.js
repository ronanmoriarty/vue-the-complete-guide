new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        yourHealth: 100,
        monsterHealth: 100,
        normalAttackLimit: 20,
        specialAttackLimit: 40,
        healthBoostLimit: 30,
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
            this.inflictDamageOnMonster(this.normalAttackLimit);
            this.inflictDamageOnPlayer1(this.normalAttackLimit);
            this.checkIfGameOver();
        },
        specialAttack: function() {
            this.inflictDamageOnMonster(this.specialAttackLimit);
            this.inflictDamageOnPlayer1(this.specialAttackLimit);
            this.checkIfGameOver();
        },
        heal: function() {
            let healthBoost = Math.floor(Math.random() * this.healthBoostLimit);
            if(healthBoost + this.yourHealth > 100) {
                healthBoost = 100 - this.yourHealth;
            }
            this.yourHealth += healthBoost;
            this.updateLog(`Player gets health boost of ${healthBoost}`);
            this.inflictDamageOnPlayer1(this.normalAttackLimit);
            this.checkIfGameOver();
        },
        inflictDamageOnMonster: function(limit) {
            const damage = this.getRandomDamage(limit);
            this.monsterHealth -= damage;
            if(this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.updateLog(`Player hits monster. Inflicts damage of ${damage}`);
        },
        inflictDamageOnPlayer1: function(limit) {
            const damage = this.getRandomDamage(limit);
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