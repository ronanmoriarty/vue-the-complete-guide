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
        },
        attack: function() {
            this.inflictDamageOnMonster(this.normalAttackLimit);
            this.inflictDamageOnPlayer1(this.normalAttackLimit);
        },
        specialAttack: function() {
            this.inflictDamageOnMonster(this.specialAttackLimit);
            this.inflictDamageOnPlayer1(this.specialAttackLimit);
        },
        heal: function() {
            const healthBoost = Math.floor(Math.random() * this.healthBoostLimit);
            this.yourHealth += healthBoost;
            this.updateLog(`Player gets health boost of ${healthBoost}`);
            this.inflictDamageOnPlayer1(this.normalAttackLimit);
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