AFRAME.registerComponent('boxt', {
  schema: {
    scale: {default: '1 1 1'}
  },

  init: function () {
    var data = this.data;
    var defaultposition = this.el.getAttribute('position');
    this.el.addEventListener('mouseenter', function () {

    var length = 1, width = 1;

    var shape = new THREE.Shape();
    shape.moveTo( 0, 0 );
    shape.lineTo( 0, width );
    shape.lineTo( length, width );
    shape.lineTo( length, 0 );
    shape.lineTo( 0, 0 );
    
    var extrudeSettings = {
      steps: 1,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelSegments: 1
    };
    
    var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var mesh = new THREE.Mesh( geometry, material ) ;

    this.setObject3D('f', new THREE.Mesh( geometry, material ));

       this.object3D.position.x = -32;
       this.object3D.position.y = 5;
       this.object3D.position.z = 30;
    });
  },

});