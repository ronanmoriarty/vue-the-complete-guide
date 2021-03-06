new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        yourHealth: 100,
        monsterHealth: 100,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameStarted = true;
            this.yourHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            this.inflictDamageOnMonster(3, 20);
            if(this.checkWin()) {
                return;
            }
            this.inflictDamageOnPlayer1(3, 20);
            this.checkWin();
        },
        specialAttack: function() {
            this.inflictDamageOnMonster(10, 40);
            if(this.checkWin()) {
                return;
            }
            this.inflictDamageOnPlayer1(10, 40);
            this.checkWin();
        },
        heal: function() {
            let healthBoost = Math.floor(Math.random() * 20);
            if(healthBoost + this.yourHealth > 100) {
                healthBoost = 100 - this.yourHealth;
            }
            this.yourHealth += healthBoost;
            this.turns.unshift({
                message: `Player heals by ${healthBoost}`,
                isMonsterTurn: false
            });
            this.inflictDamageOnPlayer1(5, 10);
        },
        inflictDamageOnMonster: function(lowerLimit, upperLimit) {
            const damage = this.getRandomDamage(lowerLimit, upperLimit);
            this.monsterHealth -= damage;
            if(this.monsterHealth < 0) {
                this.monsterHealth = 0;
            }
            this.turns.unshift({
                message: `Player hits monster. Inflicts damage of ${damage}`,
                isMonsterTurn: false
            });
        },
        inflictDamageOnPlayer1: function(lowerLimit, upperLimit) {
            const damage = this.getRandomDamage(lowerLimit, upperLimit);
            this.yourHealth -= damage;
            if(this.yourHealth < 0) {
                this.yourHealth = 0;
            }
            this.turns.unshift({
                message: `Monster hits player. Inflicts damage of ${damage}`,
                isMonsterTurn: true
            });
        },
        checkWin: function() {
            if(this.monsterHealth <= 0) {
                if(confirm('You won! Start again?')) {
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }
                return true;
            } else if(this.yourHealth <= 0) {
                if(confirm('You lost! Start again?')) {
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }
                return true;
            }
            return false;
        },
        getRandomDamage: function(lowerLimit, upperLimit) {
            const damage = Math.max(Math.floor(Math.random() * upperLimit) + 1, lowerLimit);
            console.log(`Damage: ${damage}; Lower Limit: ${lowerLimit}; Upper Limit: ${upperLimit}`);
            return damage;
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