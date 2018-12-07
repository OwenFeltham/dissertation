let movv;

function myFunc() {
  var sceneEl = document.querySelector('a-scene');
  movv = sceneEl.querySelector('#greenX');
  movv.object3D.position.x -= 20;
  console.log(sceneEl.querySelector('#redBox'));
}

function myFunc2() {
  var sceneEl = document.querySelector('a-scene');
  movv = sceneEl.querySelector('#greenX');
  movv.object3D.position.x += 20;
}

function myFunc3() {
  var sceneEl = document.querySelector('a-scene');
  movv = sceneEl.querySelector('#greenX');
  movv.object3D.position.y -= 20;
}

function myFunc4() {
  var sceneEl = document.querySelector('a-scene');
  movv = sceneEl.querySelector('#greenX');
  movv.object3D.position.y += 20;
}

function myFunc5() {
  var sceneEl = document.querySelector('a-scene');
  movv = sceneEl.querySelector('#greenX');
  movv.object3D.position.z -= 20;
}

function myFunc6() {
  var sceneEl = document.querySelector('a-scene');
  movv = sceneEl.querySelector('#greenX');
  movv.object3D.position.z += 20;
}

function reset() {
  var sceneEl = document.querySelector('a-scene');
  movv = sceneEl.querySelector('#greenX');
  movv.object3D.position.z += 20;
  movv.object3D.position.z += 20;
  movv.object3D.position.z += 20;
  movv.object3D.position.z += 20;
  movv.object3D.position.z += 20;
  movv.object3D.position.z += 20;  
}

