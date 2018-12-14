AFRAME.registerComponent('light-on-mouseenter2', {
  schema: {
    to: { default: '0' }
  },

  init: function () {
    var data = this.data;
    var defaultscale = this.el.getAttribute('intensity');
    var id = sceneEl.querySelector('#spotlight');

    this.el.addEventListener('mouseenter', function () {

        if (id == spotlight) {
        sceneEl.querySelector('#spotlight');
        this.setAttribute('intensity', data.to);
        this.setAttribute('position', { x: 5, y: 2, z: 3 });
      }
      else {

      }

    });
  }
});

AFRAME.registerComponent('light-on-mouseleave2', {
  schema: {
    to: { default: '1' }
  },

  init: function () {
    var data = this.data;
    var defaultscale = this.el.getAttribute('intensity');
    var id = sceneEl.querySelector('#spotlight');

    this.el.addEventListener('mouseenter', function () {

      if (id == spotlight) {

        this.setAttribute('intensity', data.to);
        this.setAttribute('position', { x: 10, y: 2, z: 3 });
      }
      else {

      }
    });
  }
});