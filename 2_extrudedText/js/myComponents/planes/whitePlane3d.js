AFRAME.registerComponent('white3d', {
  schema: {
    scale: {default: '1 1 1'}
  },

  init: function () {
    var data = this.data;

    this.el.addEventListener('mousedown', function (evt) {
    console.log(this.getAttribute('position', {x: 1, y: 2, z: 3}));
    console.log(evt.detail.intersection.object.el.id);

    var input = document.getElementById("userInput").value;
  
    this.setAttribute('text-geometry', {
      value: input,
      width: 1,
      xOffset: 0.05,
      yOffset: 0.05,      
      wrapCount: 140,
      // side: double
    });
    });
  },

});

// W O R K S