let rott;

function rot() {
  var sceneEl = document.querySelector('a-scene');
  rott = sceneEl.querySelector('#textCube');
  rott.object3D.rotation.x -= 0.1
}

function rot2() {
  var sceneEl = document.querySelector('a-scene');
  rott = sceneEl.querySelector('#textCube');
  rott.object3D.rotation.x += THREE.Math.degToRad(10);
}

function rot3() {
  var sceneEl = document.querySelector('a-scene');
  rott = sceneEl.querySelector('#textCube');
  rott.object3D.rotation.y -= THREE.Math.degToRad(10);
}

function rot4() {
  var sceneEl = document.querySelector('a-scene');
  rott = sceneEl.querySelector('#textCube');
  rott.object3D.rotation.y += THREE.Math.degToRad(10);
}

function rot5() {
  var sceneEl = document.querySelector('a-scene');
  rott = sceneEl.querySelector('#textCube');
  rott.object3D.rotation.z -= THREE.Math.degToRad(10);
}

function rot6() {
  var sceneEl = document.querySelector('a-scene');
  rott = sceneEl.querySelector('#textCube');
  rott.object3D.rotation.z += THREE.Math.degToRad(10);
}

function reset() {
  var sceneEl = document.querySelector('a-scene');
  movv = sceneEl.querySelector('#textCube');
  movv.object3D.rotation.x = 0;
  movv.object3D.rotation.y = 0;
  movv.object3D.rotation.z = 0; 
}