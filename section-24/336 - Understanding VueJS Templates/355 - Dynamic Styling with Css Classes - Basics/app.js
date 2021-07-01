new Vue({
    el: '#app',
    data: {
        attachRed: false,
        attachGreen: false,
        attachBlue: false
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