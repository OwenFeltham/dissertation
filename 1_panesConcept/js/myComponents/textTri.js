AFRAME.registerComponent('tri', {
  init: function () {
    // Solution for Handling Events.
    var sceneEl = document.querySelector('a-scene'); 
    var triH = sceneEl.querySelector('a-triangle')
    
      triH.addEventListener('foo', function () {
      triH.setAttribute('color', 'blue');  
    });

    triH.emit('foo');
  }
});