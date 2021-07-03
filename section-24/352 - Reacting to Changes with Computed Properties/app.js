// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0
	},
	computed: {
		output: function() {
			console.log('output');
			return this.counter > 5 ? 'Greater than 5' : 'Less than or equal to 5';
		}
	},
	watch: {
		counter: function(value) {
			var vm = this;
			setTimeout(function() {
				vm.counter = 0;
			}, 2000);
		}
	},
	methods: {
		result: function() {
			console.log('result');
			return this.counter > 5 ? 'Greater than 5' : 'Less than or equal to 5';
		}
	}
});