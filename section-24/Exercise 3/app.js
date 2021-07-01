new Vue({
        el: '#exercise',
        data: {
            value: 0,
            timeout: 5000
        },
        watch: {
            result: function(value) {
                const vm = this;
                setTimeout(() => {
                    this.value = 0;
                }, this.timeout);
            }
        },
        computed: {
            result: function() {
                return this.value < 37 ? 'Not there yet' : 'Done';
            }
        }
    });