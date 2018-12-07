let rand1;
let rand2;
let rand3;

var shootX;
var shootY;
var shootZ;

window.onload = function() {
  
  document.getElementById("scene").addEventListener("click", function sceneClick( event ) {
     createPlayerLine();
  }, false);

//_________________________________________________________ONCE SCENE HAS LOADED
  (function () {
    var scene = document.querySelector('a-scene');
    if (scene.hasLoaded) {
      run();
    } else {
      scene.addEventListener('loaded', run);
    }
    function run () {


    }
  })();

  setInterval(function () {


    rand1 = Math.floor((Math.random() * 500) + 1);
    rand2 = Math.floor((Math.random() * 500) + 1);
    rand3 = Math.floor((Math.random() * 500) + 1);  

// #region S L I D E R S  ______________________________________________________ 


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
//___________________________________________________________________  G r e e n
    var ctrlNEW = document.getElementById("ctrlWSlider");
    var minusPlane = ctrlNEW.value;
    var userSlide = (0 - minusPlane);
    ctrlNEW.oninput = function () {
      var planeXYZ = document.getElementById('greenX').getAttribute('position');
      var normalY = planeXYZ.y;
      var normalZ = planeXYZ.z;
      document.getElementById('greenX').setAttribute('position', { x: userSlide, y: normalY, z: normalZ });
    }

    var ctrlNEWY = document.getElementById("ctrlWSliderY");
    var userSlideY = ctrlNEWY.value;
    ctrlNEWY.oninput = function () {
      var planeXYZ = document.getElementById('greenX').getAttribute('position');
      var normalX = planeXYZ.x;
      var normalZ = planeXYZ.z;
      document.getElementById('greenX').setAttribute('position', { x: normalX, y: userSlideY, z: normalZ });
    }

    var ctrlNEWZ = document.getElementById("ctrlWSliderZ");
    var minusPlaneZ = ctrlNEWZ.value;
    var userSlideZ = (0 - minusPlaneZ);
    ctrlNEWZ.oninput = function () {
      var planeXYZ = document.getElementById('greenX').getAttribute('position');
      var normalY = planeXYZ.y;
      var normalX = planeXYZ.x;
      document.getElementById('greenX').setAttribute('position', { x: normalX, y: normalY, z: userSlideZ });
    }

    var ctrlNEWScale = document.getElementById("ctrlWSliderScale");
    var userSlideScale = ctrlNEWScale.value;
    ctrlNEWScale.oninput = function () {
      document.getElementById('greenX').setAttribute('scale', { x: userSlideScale, y: userSlideScale, z: userSlideScale });
    }

//________________________________________________________________ W h i t e
    var ctrlNEWWhite = document.getElementById("ctrlWSliderWhite");
    var minusPlaneWhite = ctrlNEWWhite.value;
    var userSlideWhite = (0 - minusPlaneWhite);
    ctrlNEWWhite.oninput = function () {
      var planeXYZ = document.getElementById('whiteX').getAttribute('position');
      var normalY = planeXYZ.y;
      var normalZ = planeXYZ.z;
      document.getElementById('whiteX').setAttribute('position', { x: userSlideWhite, y: normalY, z: normalZ });
    }

    var ctrlNEWYWhite = document.getElementById("ctrlWSliderYWhite");
    var userSlideYWhite = ctrlNEWYWhite.value;
    ctrlNEWYWhite.oninput = function () {
      var planeXYZ = document.getElementById('whiteX').getAttribute('position');
      var normalX = planeXYZ.x;
      var normalZ = planeXYZ.z;
      document.getElementById('whiteX').setAttribute('position', { x: normalX, y: userSlideYWhite, z: normalZ });
    }

    var ctrlNEWZWhite = document.getElementById("ctrlWSliderZWhite");
    var minusPlaneZWhite = ctrlNEWZWhite.value;
    var userSlideZWhite = (0 - minusPlaneZWhite);
    ctrlNEWZWhite.oninput = function () {
      var planeXYZ = document.getElementById('whiteX').getAttribute('position');
      var normalY = planeXYZ.y;
      var normalX = planeXYZ.x;
      document.getElementById('whiteX').setAttribute('position', { x: normalX, y: normalY, z: userSlideZWhite });
    }

    var ctrlNEWScaleWhite = document.getElementById("ctrlWSliderScaleWhite");
    var userSlideScaleWhite = ctrlNEWScaleWhite.value;
    ctrlNEWScaleWhite.oninput = function () {
      document.getElementById('whiteX').setAttribute('scale', { x: userSlideScaleWhite, y: userSlideScaleWhite, z: userSlideScaleWhite });
    }

//______________________________________________________________________ P i n k
    var ctrlNEWPink = document.getElementById("ctrlWSliderPink");
    var minusPlanePink = ctrlNEWPink.value;
    var userSlidePink = (0 - minusPlanePink);
    ctrlNEWPink.oninput = function () {
      var planeXYZ = document.getElementById('PinkX').getAttribute('position');
      var normalY = planeXYZ.y;
      var normalZ = planeXYZ.z;
      document.getElementById('PinkX').setAttribute('position', { x: userSlidePink, y: normalY, z: normalZ });
    }

    var ctrlNEWYPink = document.getElementById("ctrlWSliderYPink");
    var userSlideYPink = ctrlNEWYPink.value;
    ctrlNEWYPink.oninput = function () {
      var planeXYZ = document.getElementById('PinkX').getAttribute('position');
      var normalX = planeXYZ.x;
      var normalZ = planeXYZ.z;
      document.getElementById('PinkX').setAttribute('position', { x: normalX, y: userSlideYPink, z: normalZ });
    }

    var ctrlNEWZPink = document.getElementById("ctrlWSliderZPink");
    var minusPlaneZPink = ctrlNEWZPink.value;
    var userSlideZPink = (0 - minusPlaneZPink);
    ctrlNEWZPink.oninput = function () {
      var planeXYZ = document.getElementById('PinkX').getAttribute('position');
      var normalY = planeXYZ.y;
      var normalX = planeXYZ.x;
      document.getElementById('PinkX').setAttribute('position', { x: normalX, y: normalY, z: userSlideZPink });
    }

    var ctrlNEWScalePink = document.getElementById("ctrlWSliderScalePink");
    var userSlideScalePink = ctrlNEWScalePink.value;
    ctrlNEWScalePink.oninput = function () {
      document.getElementById('PinkX').setAttribute('scale', { x: userSlideScalePink, y: userSlideScalePink, z: userSlideScalePink });
    }

//______________________________________________________________________ P i n k
var ctrlNEWBlue = document.getElementById("ctrlWSliderBlue");
var minusPlaneBlue = ctrlNEWBlue.value;
var userSlideBlue = (0 - minusPlaneBlue);
ctrlNEWBlue.oninput = function () {
  var planeXYZ = document.getElementById('BlueX').getAttribute('position');
  var normalY = planeXYZ.y;
  var normalZ = planeXYZ.z;
  document.getElementById('BlueX').setAttribute('position', { x: userSlideBlue, y: normalY, z: normalZ });
}

var ctrlNEWYBlue = document.getElementById("ctrlWSliderYBlue");
var userSlideYBlue = ctrlNEWYBlue.value;
ctrlNEWYBlue.oninput = function () {
  var planeXYZ = document.getElementById('BlueX').getAttribute('position');
  var normalX = planeXYZ.x;
  var normalZ = planeXYZ.z;
  document.getElementById('BlueX').setAttribute('position', { x: normalX, y: userSlideYBlue, z: normalZ });
}

var ctrlNEWZBlue = document.getElementById("ctrlWSliderZBlue");
var minusPlaneZBlue = ctrlNEWZBlue.value;
var userSlideZBlue = (0 - minusPlaneZBlue);
ctrlNEWZBlue.oninput = function () {
  var planeXYZ = document.getElementById('BlueX').getAttribute('position');
  var normalY = planeXYZ.y;
  var normalX = planeXYZ.x;
  document.getElementById('BlueX').setAttribute('position', { x: normalX, y: normalY, z: userSlideZBlue });
}

var ctrlNEWScaleBlue = document.getElementById("ctrlWSliderScaleBlue");
var userSlideScaleBlue = ctrlNEWScaleBlue.value;
ctrlNEWScaleBlue.oninput = function () {
  document.getElementById('BlueX').setAttribute('scale', { x: userSlideScaleBlue, y: userSlideScaleBlue, z: userSlideScaleBlue });
}

//______________________________________________________________________ P i n k
var ctrlNEWYellow = document.getElementById("ctrlWSliderYellow");
var minusPlaneYellow = ctrlNEWYellow.value;
var userSlideYellow = (0 - minusPlaneYellow);
ctrlNEWYellow.oninput = function () {
  var planeXYZ = document.getElementById('YellowX').getAttribute('position');
  var normalY = planeXYZ.y;
  var normalZ = planeXYZ.z;
  document.getElementById('YellowX').setAttribute('position', { x: userSlideYellow, y: normalY, z: normalZ });
}

var ctrlNEWYYellow = document.getElementById("ctrlWSliderYYellow");
var userSlideYYellow = ctrlNEWYYellow.value;
ctrlNEWYYellow.oninput = function () {
  var planeXYZ = document.getElementById('YellowX').getAttribute('position');
  var normalX = planeXYZ.x;
  var normalZ = planeXYZ.z;
  document.getElementById('YellowX').setAttribute('position', { x: normalX, y: userSlideYYellow, z: normalZ });
}

var ctrlNEWZYellow = document.getElementById("ctrlWSliderZYellow");
var minusPlaneZYellow = ctrlNEWZYellow.value;
var userSlideZYellow = (0 - minusPlaneZYellow);
ctrlNEWZYellow.oninput = function () {
  var planeXYZ = document.getElementById('YellowX').getAttribute('position');
  var normalY = planeXYZ.y;
  var normalX = planeXYZ.x;
  document.getElementById('YellowX').setAttribute('position', { x: normalX, y: normalY, z: userSlideZYellow });
}

var ctrlNEWScaleYellow = document.getElementById("ctrlWSliderScaleYellow");
var userSlideScaleYellow = ctrlNEWScaleYellow.value;
ctrlNEWScaleYellow.oninput = function () {
  document.getElementById('YellowX').setAttribute('scale', { x: userSlideScaleYellow, y: userSlideScaleYellow, z: userSlideScaleYellow });
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
   ctx.fillText(input, 0, 100, 1024);

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