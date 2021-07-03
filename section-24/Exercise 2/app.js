new Vue({
  el: "#exercise",
  data: {
    value: "",
  },
  methods: {
      alert: function() {
          alert('some alert');
      },
      onKeyDown: function(event) {
          this.value = event.target.value;
      }
  }
});
