  AFRAME.registerComponent('scale-on-collide', {
    schema: {
      scale: {default: '1 1 1'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultscale = el.getAttribute('scale');
      var isCol = false;

      el.addEventListener('collide', function (e) {
        el.object3D.scale.set(2, 2, 2);
        console.log(e.detail.contact);

        el.removeObject3D('light');
      });
    }
  });

  // WORKS