new Vue({
  el: '#exercise',
  data: {
    effectStarted: false,
    highlight: false,
    colour: '',
    border: '',
    inputClass: '',
    e4class: '',
    e4classApplied: false,
    backgroundColour: '',
    progressValue: 0
  },
  methods: {
    startEffect: function() {
      this.effectStarted = true;
      const vm = this;
      setInterval(function() {
        vm.highlight = !vm.highlight;
        vm.colour = vm.colour === 'blue' ? '' : 'blue';
        vm.border = vm.colour === 'blue' ? '' : 'withBorder';
      }, 2000);
    },
    startProgress: function() {
      console.log('Progress started...');
      const vm = this;
      setInterval(function() {
        vm.progressValue += 10;
        if(vm.progressValue > 100) {
          vm.progressValue = 100;
        }
        console.log(`Progress: ${vm.progressValue}%`);
      }, 1000);
    }
  },
  computed: {
    effectClass: function() {
      if(!this.effectStarted) {
        return '';
      }

      return this.highlight ? 'highlight' : 'shrink';
    },
    e4: function() {
      if(this.e4classApplied === 'true') {
        return this.e4class;
      }

      return '';
    },
    e5Style: function() {
      return {
        backgroundColor: this.backgroundColour,
        width: '100px',
        height: '100px'
      };
    },
    progress: function() {
      return {
        margin: '5px',
        borderRadius: '3px',
        width: this.progressValue + '%',
        height: '10px',
        backgroundColor: 'blue'
      };
    }
  }
});
