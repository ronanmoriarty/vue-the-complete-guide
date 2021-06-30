// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0
	},
	methods: {
		result() {
			return this.counter > 5 ? 'Greater than 5' : 'Less than or equal to 5';
		}
	}
});