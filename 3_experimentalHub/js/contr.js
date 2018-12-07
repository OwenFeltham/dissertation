var FizzyText = function() {
  this.message = 'dat.gui';
  this.fov = 0.8;
  this.displayOutline = true;
  // Define render logic ...
};

window.onload = function() {
  var text = new FizzyText();
  var gui = new dat.GUI();
  gui.add(text, 'message');
  gui.add(text, 'fov', -5, 5);
  gui.add(text, 'displayOutline');
  gui.add(text, 'explode');
};
