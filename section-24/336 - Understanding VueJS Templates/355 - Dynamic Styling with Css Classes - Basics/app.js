new Vue({
    el: '#app',
    data: {
        attachRed: false,
        attachGreen: false,
        attachBlue: false,
        colour: 'green'
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            };
        }
    }
});