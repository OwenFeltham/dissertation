window.onload = function () {
	
	var exitCursor = false;

	window.addEventListener('keyup', function (key) {
		if (key.which == 67) { exitCursor = false; }
	});
	
	window.addEventListener('keydown', function (key) {
		if (key.which == 67) { exitCursor = true; }
	});

	document.getElementById("scene").addEventListener("click", function sceneClick(event) {
		// display the current click count inside the clicked div
		// longBox();

		createPlayerLine();

	}, false);

		setInterval(function () {

			var fallThrough = document.getElementById("player").getAttribute('position');
			if (fallThrough.y < -5) {
				console.log(fallThrough.y);
				document.getElementById('player').setAttribute('position', { x: 0, y: 10.8, z: 0 });
			}

			// #region S L I D E R S  ______________________________________________________ 
			var slider = document.getElementById("myRange");
			var output = slider.value;
			var view = document.getElementById("fovState");
			view.innerHTML = slider.value;
			slider.oninput = function () {
				document.getElementById("player").setAttribute('camera', { fov: output });   //    GOOD
				view.innerHTML = slider.value;
			}

			var nums = document.getElementById("myNumber");
			var numVal = nums.value;
			nums.oninput = function () {
				document.getElementById("player").setAttribute('camera', { zoom: numVal });   //    GOOD
			}

			var movNums = document.getElementById("movSlider");
			var movNumVal = movNums.value;
			var moveSpeed = document.getElementById("moveState");
			moveSpeed.innerHTML = movNums.value;
			movNums.oninput = function () {
				document.getElementById("player").setAttribute('wasd-controls', { acceleration: movNumVal });   //    GOOD
				moveSpeed.innerHTML = movNums.value;
			}

			var refToDOMslider = document.getElementById("hudSlider");
			let opaNo = refToDOMslider.value;
			var opaFloat = opaNo / 200;
			var opaLevel = document.getElementById("hudState");
			opaLevel.innerHTML = refToDOMslider.value;
			refToDOMslider.oninput = function () {
				document.getElementById("curvedHUD").setAttribute('opacity', opaFloat);
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

		}, 80);
	}