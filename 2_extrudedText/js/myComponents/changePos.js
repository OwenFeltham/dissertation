    AFRAME.registerComponent('pos', {
    schema: {
      scale: {default: '1 1 1'}
    },

    init: function () {
      var data = this.data;
      var defaultposition = this.el.getAttribute('position');

  //    var geometry = new THREE.ConeGeometry( 2, 4, 8 );
  //    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

      this.el.addEventListener('mouseenter', function () {
  //    console.log(this.getAttribute('position'));
      this.setAttribute('position', {x: 1, y: 2, z: -30});
      // this.object3D.position.x += 2;
      // this.object3D.position.y += 1;
      // this.object3D.position.z += 5;

  //    this.setObject3D('light', new THREE.PointLight());
  //    this.setObject3D('ligggggght', new THREE.Mesh( geometry, material ));
      


      // this.setAttribute('geometry', {
      //   primitive: 'box',
      //   height: 30,
      //   width: 10,
      // });

      // var input = document.getElementById("userInput").value;
    
      // this.setAttribute('text-geometry', {
      //   value: input,
      // });
      });
    },

  });

  // WORKS AT MAKING CONES AND LIGHTS AND CHANGING POSITION AND A BOX