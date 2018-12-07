AFRAME.registerComponent('pink', {
  schema: {
    scale: {default: '1 1 1'}
  },

  init: function () {
    var data = this.data;

    this.el.addEventListener('mousedown', function (evt) {
    console.log(this.getAttribute('position', {x: 1, y: 2, z: 3}));
    // console.log(evt.detail.intersection.object.el.id);

    var input = document.getElementById("userInput3").value;
  
    this.setAttribute('text', {
      value: input,
      width: 5,
      height: 5,
      xOffset: 0.05,
      yOffset: 0.05,      
      wrapCount: 140,
      // side: double
    });

    this.setAttribute('scale', {x: 550, y: 550, z: 550});
    
    });
  },

});

// W O R K S