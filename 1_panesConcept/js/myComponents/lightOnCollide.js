AFRAME.registerComponent('light-on-collide', {
  schema: {
    intensity: { default: '1' }
  },

  init: function () {
    var data = this.data;
    var el = this.el;  // <a-box>
    var defaultintensity = el.getAttribute('intensity');

    el.addEventListener('collide', function (e) {
      el.setAttribute('light', { color: '#ACC', intensity: 0.75 });
      console.log(e.detail.contact);
    });



  }
});

// DOESN'T WORK