AFRAME.registerComponent('light-on-mouseenter', {
  schema: {
    to: {default: '0'}
  },

  init: function () {
    var data = this.data;
    this.el.addEventListener('mouseenter', function () {
      this.setAttribute('intensity', 0);
      // this.setAttribute('position', {x: 1, y: 2, z: 3});
    });
  }
});

AFRAME.registerComponent('light-on-mouseleave', {
  schema: {
    to: {default: '1'}
  },

  init: function () {
    var data = this.data;
    this.el.addEventListener('mouseleave', function () {
      this.setAttribute('intensity', 1);
    });
  }
});

// THINK IT WORKS
