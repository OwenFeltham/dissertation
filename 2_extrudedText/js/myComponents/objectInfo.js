    AFRAME.registerComponent('draw-canvas2', {
      schema: {default: ''},
  
      init: function () {
        this.canvas = document.getElementById(this.data);
        this.ctx = this.canvas.getContext('2d');
  
        // Draw on canvas...
      }
    });

    AFRAME.registerComponent('draw-canvas', {
      schema: { default: '' },

      init: function () {
        this.canvas = document.getElementById(this.data);
        this.ctx = this.canvas.getContext('2d');

        // Draw on canvas...
      }
    });