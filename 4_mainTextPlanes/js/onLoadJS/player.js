

//       88888888ba   88                                                   
//       88      "8b  88                                                   
//       88      ,8P  88                                                   
//       88aaaaaa8P'  88  ,adPPYYba,  8b       d8   ,adPPYba,  8b,dPPYba,  
//       88""""""'    88  ""     `Y8  `8b     d8'  a8P_____88  88P'   "Y8  
//       88           88  ,adPPPPP88   `8b   d8'   8PP"""""""  88          
//       88           88  88,    ,88    `8b,d8'    "8b,   ,aa  88          
//       88           88  `"8bbdP"Y8      Y88'      `"Ybbd8"'  88          
//                                        d8'                              
//                                       d8'                               

var shootX;
var shootY;
var shootZ;

var raycasterXYZ;

function getPlayerXY() {
  var pxy = document.getElementById("player").getAttribute('position', {});   //      
  console.log(pxy);
}

//_______________________________________________C R E A T E   M O R E   T E X T
function textWhite() {
  var input = document.getElementById("userInput").value;
  document.getElementById("whitePlane").setAttribute('text', { value: input,  });
  document.getElementById("whitePlane").setAttribute('text', { wrapCount: 140 });
  document.getElementById("whitePlane").setAttribute('text', { side: 'double'   });  
}

function textGreen() {
  var input = document.getElementById("userInput2").value;
  document.getElementById("greenPlane").setAttribute('text', { value: input,  });  
  document.getElementById("greenPlane").setAttribute('text', { wrapCount: 140 });
  document.getElementById("greenPlane").setAttribute('text', { side: 'double'   });  
}

function textPink() {
  var input = document.getElementById("userInput3").value;
  document.getElementById("pinkPlane").setAttribute('text', { value: input   });
  document.getElementById("pinkPlane").setAttribute('text', {wrapCount: 140  });
  document.getElementById("pinkPlane").setAttribute('text', { side: 'double'   });    
}

function textYellow() {
  var input = document.getElementById("userInput4").value;
  document.getElementById("yellowPlane").setAttribute('text', { value: input  });
  document.getElementById("yellowPlane").setAttribute('text', {wrapCount: 140 });
  document.getElementById("yellowPlane").setAttribute('text', { side: 'double'  });    
}

function textBlue() {
  var input = document.getElementById("userInput5").value;
  document.getElementById("bluePlane").setAttribute('text', { value: input   });
  document.getElementById("bluePlane").setAttribute('text', {wrapCount: 140  });
  document.getElementById("bluePlane").setAttribute('text', { side: 'double'   });    
}

//___________________________________________________________T O G G L E   F L Y
var toggled = true;
function fly2() {
  toggled = !toggled;
  var flyAb = document.querySelector('[camera]');
  console.log(flyAb);
  document.getElementById("player").setAttribute('wasd-controls', { fly: toggled });
  if (toggled) {
    document.getElementById("onOff").innerHTML = 'ON';
  }
  else {
    document.getElementById("onOff").innerHTML = 'OFF';
  }
}

//_________________________________________T O G G L E   P O I N T E R   L O C K
var togPointer = true;
function pointerLock() {
  togPointer = !togPointer;
  document.getElementById("player").setAttribute('look-controls', { pointerLockEnabled: togPointer });
  if (togPointer) {
    document.getElementById("").innerHTML = 'ON';
  }
  else {
    document.getElementById("").innerHTML = 'OFF';
  }
}

//_______________________________________________________T O G G L E   T O R C H
var togTorch = true;
var newIntensity = 1;
function toggleTorch() {
  togTorch = !togTorch;
  if (togTorch == true) {
    newIntensity = 0.6
  }
  else {
    newIntensity = 0;
  }
  document.getElementById("spotlightP").setAttribute('light', { intensity: newIntensity });
}

//_________________________________________________C H A N G E   W / S   A X I S
var toggledAxis = true;
function wsAxis() {
  toggledAxis = !toggledAxis;
  var z = 'z';
  var y = 'y';

  if (toggledAxis) {
    document.getElementById("onOffAxis").innerHTML = 'Z (w: forward/ s: backward)';
    document.getElementById("player").setAttribute('wasd-controls', { wsAxis: z });
    document.getElementById("player").setAttribute('wasd-controls', { wsInverted: false });
  }
  else {
    document.getElementById("onOffAxis").innerHTML = 'Y (w: up/ s: down)';
    document.getElementById("player").setAttribute('wasd-controls', { wsAxis: y });
    document.getElementById("player").setAttribute('wasd-controls', { wsInverted: true });
  }
}

//___________________________________________________H U D   V I S I B I L I T Y
var hudVisible = true;
function hudOnOff() {
  hudVisible = !hudVisible;

  if (hudVisible) {
    document.getElementById("hud").innerHTML = 'ON';
    document.getElementById("curvedHUD").setAttribute('position', { x: -0.33, y: 1.9, z: -2.13 });   //    
  }
  else {
    document.getElementById("hud").innerHTML = 'OFF';
    document.getElementById("curvedHUD").setAttribute('position', { x: -3.4, y: 9, z: -2 });   //    
  }
}

// IF HUD VISIBLE THEN OTHE THINGS VISIBLE!!!!!!!!!!!!!!!!!!!!
// ROTATE WITHOUT CURVED HUD ROTATING!!!!!!!!!!!!!!!!!!!!!!!!!

//_________________________________________________________D I D N ' T   W O R K
var physOn = true;
function hmm() {
  physOn = !physOn;
}

//___________________________________C R E A T E   A   B O X   A T   R A N D O M
function longBox() {
  
  var sceneEl = document.querySelector('a-scene');
  var entityEl = document.createElement('a-entity');
  entityEl.setAttribute('geometry', {
    primitive: 'box',
    height: 10,
    width: 10,
    depth: 10
  });
  entityEl.setAttribute('position', { x: rand1, y: rand2, z: rand3 });
  sceneEl.appendChild(entityEl);
}

//_________________________________________________C R E A T E   N E W   L I N E
function createNewLine() {
  var sceneEl = document.querySelector('a-scene');
  var entityEl = document.createElement('a-entity');
  entityEl.setAttribute('line', {
    start: { x: 0, y: 0, z: 0 },
    end: { x: rand1, y: rand2, z: rand3 },
    color: red,
  });
  entityEl.setAttribute('end', { x: rand1, y: rand2, z: rand3 });
  entityEl.setAttribute('start', { x: 0, y: 0, z: 0 });

  sceneEl.appendChild(entityEl);
}

//_________________________________________________________C R E A T E   G R I D
function createGrid() {
  var me = document.querySelector('#player');
  console.log(me);
  var sceneEl = document.querySelector('a-scene');
  var entityEl = document.createElement('a-entity');
  entityEl.setAttribute('geometry', {
    primitive: 'box',
    height: 50,
    width: 50,
    depth: 50
  });
  entityEl.setAttribute('position', { x: 0, y: 25, z: 0 });
  entityEl.setAttribute('material', { wireframe: true });
  sceneEl.appendChild(entityEl);
}

//_________________________________________________POINT TO OBJECT RAYCAST PLAYER POSITION!!!!!!!!!!!!!!
function createPlayerLine() {
	var pxy = document.getElementById("player").getAttribute('position', {});
  var pxy = document.getElementById("player").getAttribute('position', {});
  
  var sceneEl = document.querySelector('a-scene');
  var entityEl = document.createElement('a-entity');

  var playerX = pxy.x + 1;
  var playerY = pxy.y - 5;
  var playerZ = pxy.z + 1;

// console.log(hour);

  entityEl.setAttribute('line', {
    start: { x: playerX, y: playerY, z: playerZ},
    end: { x: shootX, y: shootY, z: shootZ },
    color: red
  });

  // entityEl.setAttribute('end', { x: shootX, y: shootY, z: shootZ });
  // entityEl.setAttribute('start', { x: playerX, y: playerY, z: playerZ});
  // entityEl.setAttribute('color', {red});

  sceneEl.appendChild(entityEl);
}
