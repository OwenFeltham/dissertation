let scall;

function scaleClick() {
  var sceneEl = document.querySelector('a-scene');
  scall = sceneEl.querySelector('#textCube');
  scall.object3D.scale.x -= 0.2;
  scall.object3D.scale.y -= 0.2;  
}

function scaleClick2() {
  var sceneEl = document.querySelector('a-scene');
  scall = sceneEl.querySelector('#textCube');
  scall.object3D.scale.x += 0.2;
  scall.object3D.scale.y += 0.2;  
}

function scaleClick3() {
  var sceneEl = document.querySelector('a-scene');
  scall = sceneEl.querySelector('#textCube');
  scall.object3D.scale.y -= 1;
}

function scaleClick4() {
  var sceneEl = document.querySelector('a-scene');
  scall = sceneEl.querySelector('#textCube');
  scall.object3D.scale.y += 1;
}

function scaleClick5() {
  var sceneEl = document.querySelector('a-scene');
  scall = sceneEl.querySelector('#textCube');
  scall.object3D.scale.z -= 1;
}

function scaleClick6() {
  var sceneEl = document.querySelector('a-scene');
  scall = sceneEl.querySelector('#textCube');
  scall.object3D.scale.z += 1;
}