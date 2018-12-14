AFRAME.registerComponent('nrml', {
  schema: {
    scale: {default: '0 0 0'}
  },

  init: function () {
    var data = this.data;
    var defaultposition = this.el.getAttribute('position');

    this.el.addEventListener('mouseenter', function () {
    this.setAttribute('position', {x: 1, y: 2, z: 3});
    // this.object3D.position.x += 2;
    // this.object3D.position.y += 1;
    // this.object3D.position.z += 5;

    var input = document.getElementById("userInput").value;
  
    this.setAttribute('text', {
      id: "texLine1",
      value: input,
      width: 15,
      height: 15,
      // side: double
    });
    });
  },

});


// WORKS