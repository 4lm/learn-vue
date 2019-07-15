new Vue({
  el: '#exercise',
  data: {
    initialValue: false,
    highlight: this.initialValue,
    shrink: this.initialValue,
    classToAttach: '',
    boolToAttach: true,
    setStyle: {
      color: 'orange'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function () {
      var mv = this
      setInterval(function () {
        mv.shrink = mv.highlight;
        mv.highlight = !mv.highlight;
      }, 1000);
    },
    startProgress: function () {
      var mv = this
      var width = 1
      setInterval(function () {
        width += 1;
        mv.progressBar.width = width + "%";
      }, 1000);
    }
  }
});
