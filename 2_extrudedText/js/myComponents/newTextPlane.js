AFRAME.registerComponent('squa', {
  schema: {
    scale: {default: '1 1 1'}
  },

  init: function () {
    var data = this.data;

    this.el.addEventListener('mouseenter', function () {
     this.setAttribute('position', {x: 1, y: 2, z: 3});

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

// W O R K S