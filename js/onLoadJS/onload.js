
//         db                      88                                           88                            
//        d88b                     ""                                    ,d     ""                            
//       d8'`8b                                                          88                                   
//      d8'  `8b      8b,dPPYba,   88  88,dPYba,,adPYba,   ,adPPYYba,  MM88MMM  88   ,adPPYba,   8b,dPPYba,   
//     d8YaaaaY8b     88P'   `"8a  88  88P'   "88"    "8a  ""     `Y8    88     88  a8"     "8a  88P'   `"8a  
//    d8""""""""8b    88       88  88  88      88      88  ,adPPPPP88    88     88  8b       d8  88       88  
//   d8'        `8b   88       88  88  88      88      88  88,    ,88    88,    88  "8a,   ,a8"  88       88  
//  d8'          `8b  88       88  88  88      88      88  `"8bbdP"Y8    "Y888  88   `"YbbdP"'   88       88  
                                                                                                                                                                                                                           
//       88888888888                                                      
//       88                                                               
//       88                                                               
//       88aaaaa  8b,dPPYba,  ,adPPYYba,  88,dPYba,,adPYba,    ,adPPYba,  
//       88"""""  88P'   "Y8  ""     `Y8  88P'   "88"    "8a  a8P_____88  
//       88       88          ,adPPPPP88  88      88      88  8PP"""""""  
//       88       88          88,    ,88  88      88      88  "8b,   ,aa  
//       88       88          `"8bbdP"Y8  88      88      88   `"Ybbd8"'  
                                                                                  
//              88                                                 
//              88                                                 
//              88                                                 
//              88           ,adPPYba,    ,adPPYba,   8b,dPPYba,   
//              88          a8"     "8a  a8"     "8a  88P'    "8a  
//              88          8b       d8  8b       d8  88       d8  
//              88          "8a,   ,a8"  "8a,   ,a8"  88b,   ,a8"  
//              88888888888  `"YbbdP"'    `"YbbdP"'   88`YbbdP"'   
//                                                    88           
//                                                    88           

let rand1;
let rand2;
let rand3;

window.onload = function () {
  
  document.getElementById("scene").addEventListener("click", function( event ) {
    // display the current click count inside the clicked div
     longBox();
     createPlayerLine();

  }, false);

//____________________________________________________________Set opacity once
  (function () {
    var scene = document.querySelector('a-scene');
    if (scene.hasLoaded) {
      run();
    } else {
      scene.addEventListener('loaded', run);
    }
    function run () {

      document.getElementById("curvedHUD").setAttribute('material', { opacity: 0.16 });  

      var size = 5000;
      var divisions = 150;
      
      document.getElementById("ground").setObject3D('gh', new THREE.GridHelper( size, divisions )); 
      document.getElementById("gridHelper1").setObject3D('gh1', new THREE.GridHelper( size, divisions )); 
      document.getElementById("gridHelper2").setObject3D('gh2', new THREE.GridHelper( size, divisions )); 
    }
  })();

  setInterval(function () {

    rand1 = Math.floor((Math.random() * 500) + 1);
    rand2 = Math.floor((Math.random() * 500) + 1);
		rand3 = Math.floor((Math.random() * 500) + 1);  
		
    var shootX = raycasterXYZ.x;
    var shootY = raycasterXYZ.y;
    var shootZ = raycasterXYZ.z;

// #region S L I D E R S  ______________________________________________________ 
    var slider = document.getElementById("myRange");
    var output = slider.value;
    var view = document.getElementById("fovState");
    view.innerHTML = slider.value;
    slider.oninput = function() {
      document.getElementById("player").setAttribute('camera', {fov: output});   //    GOOD
      view.innerHTML = slider.value;
    }

    var nums = document.getElementById("myNumber");
    var numVal = nums.value;
    nums.oninput = function() {
      document.getElementById("player").setAttribute('camera', {zoom: numVal});   //    GOOD
    }

    var movNums = document.getElementById("movSlider");
    var movNumVal = movNums.value;
    var moveSpeed = document.getElementById("moveState");
    moveSpeed.innerHTML = movNums.value;
    movNums.oninput = function() {
      document.getElementById("player").setAttribute('wasd-controls', {acceleration : movNumVal});   //    GOOD
      moveSpeed.innerHTML = movNums.value;
    }
    
    var refToDOMslider = document.getElementById("hudSlider");
    let opaNo = refToDOMslider.value;
    var opaFloat = opaNo / 200;
    var opaLevel = document.getElementById("hudState");
    opaLevel.innerHTML = refToDOMslider.value;
    refToDOMslider.oninput = function() {
      document.getElementById("curvedHUD").setAttribute('opacity', opaFloat );  
      opaLevel.innerHTML = opaFloat;
    }

		var fallThrough = document.getElementById( "rig" ).getAttribute( 'position' ); 
		if (fallThrough.y < -5) {
			document.getElementById( 'rig' ).setAttribute( 'position', { x: 0, y: 1.8, z:0 } );
		}

// #region C A N V A S   S K Y__________________________________________________
   var input = document.getElementById("userInput").value;

   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");

   var my_gradient = ctx.createLinearGradient(0, 0, 0, 1000);
   my_gradient.addColorStop(0, "blue");
   my_gradient.addColorStop(0.5, "white");
   ctx.fillStyle = my_gradient;
   ctx.fillRect(0, 0, 2000, 1000);

   ctx.fillStyle = "black";
   ctx.font = "50px Arial";
   ctx.fillText(input, 0, 200, 1024);

// #region I F  ________________________________________________________________
   
    // console.log(globalx);
    // console.log(globalLet);

    // if (globalx < 100 || globalLet < 100) {
    //   console.log("____________________________worked");

    // } else {
    //   console.log("________________________workedElse");
    // }

// #region C L O C K____________________________________________________________
    // var canvas = document.getElementById("myCanvas2");
    // var ctx2 = canvas.getContext("2d");

    var today       = 0;
    var hour        = 0;
    var minute      = 0;
    var second      = 0;
    var secOffset   = 0;
    var minOffset   = 0;
    var hourOffset  = 0;
    
    // startTime() creates variables storing computer time
    function startTime() {
  
      today  = new Date();
  
      today.setHours(today.getHours())
      today.setMinutes(today.getMinutes())
      today.setSeconds(today.getSeconds())
  
      hour = today.getHours();
      minute = today.getMinutes();
      second = today.getSeconds();
  
      hour   = checkTime( hour   );
      minute = checkTime( minute );
      second = checkTime( second );
  
      var t = setTimeout(startTime, 500);

      // ctx2.clearRect(0, 0, canvas.width, canvas.height);      // C L E A R 
      // ctx2.font = "50px Verdana";
      // ctx2.strokeText(hour + ": " + minute + ": " + second, 90, 450);
      // ctx2.stroke;

      document.getElementById("curvedHUD").setAttribute('value',  hour + ":" + minute + ":" + second); 
      // document.getElementById('txt').innerHTML =
      // hour + ":" + minute + ":" + second;
    }
  
    // Makes sure seconds, minutes and hours have a zero when appropriate
    function checkTime(i) {
      if (i < 10) { i = "0" + i };
      return i;
    }
// endregion

  startTime();



  }, 80);

}