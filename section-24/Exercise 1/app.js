new Vue({
    el: '#exercise',
    data: {
        name: 'Ronan',
        age: 21,
        imageLink: 'dino-reichmuth-A5rCN8626Ck-unsplash.jpg'
    },
    methods: {
        getRandomNumber: function () {
            return Math.random();
        }
    }
});