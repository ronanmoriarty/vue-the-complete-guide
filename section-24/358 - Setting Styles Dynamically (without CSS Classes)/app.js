new Vue({
    el: '#app',
    data: {
        colour: 'gray',
        width: 100
    },
    computed: {
        myStyle: function() {
            return {
                backgroundColor: this.colour,
                width: this.width + 'px'
            };
        }
    }
});