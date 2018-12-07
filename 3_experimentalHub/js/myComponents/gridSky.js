AFRAME.registerComponent('gridSky', {
  schema: {
    scale: {default: '1 1 1'}
  },

  init: function () {
    var data = this.data;
    var defaultposition = this.el.getAttribute('position');
    var rectGlow;

    this.el.addEventListener('mouseenter', function () {

    rectGlow = this.setObject3D('rectGlow', new THREE.RectAreaLight( 0xffffff, intensity,  width, height ));
    
    var size = 10;
    var divisions = 10;

    this.setObject3D('ligdrtyuioht', new THREE.GridHelper( size, divisions ));

    var width = 10;
    var height = 10;
    var intensity = 1;
    rectGlow.position.set( 5, 5, 0 );
    rectGlow.lookAt( 0, 0, 0 );

    });
  },
});


// KIND OF WORKS BUT RETURNS AN ERROR