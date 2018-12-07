AFRAME.registerComponent('edd', {
  schema: {
    scale: {default: '1 1 1'}
  },

  init: function () {
    var data = this.data;
    var defaultposition = this.el.getAttribute('position');

    var loader;

    this.el.addEventListener('mouseenter', function () {


      loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
      
        this.setObject3D('ligffffffffffffffht', new THREE.FontLoader());

        this.setObject3D('texd', new THREE.TextGeometry( 'Hello three.js!', {
          font: font,
          size: 80,
          height: 5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 10,
          wrapCount: 80,
          bevelSize: 8,
          bevelSegments: 5,
          side: double,
        } ));

      } );
    });
  },

});