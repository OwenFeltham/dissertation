var rand1;
var rand2;
var rand3;

var shootX;
var shootY;
var shootZ;

var pxy;

var t = requestAnimationFrame;

var raycasterXYZ;

var playerX;
var playerY;
var playerZ;

var sceneEl;
var entityEl;

window.onload = function () {

	document.getElementById("scene").addEventListener("click", function sceneClick(event) {
		longBox();
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
		function run() {
			// elementById("curvedHUD").setAttribute('material', { opacity: 0.16 });
			// var size = 1000;
			// var divisions = 150;

			// document.getElementById("ground").setObject3D('gh', new THREE.GridHelper(size, divisions));
			// document.getElementById("gridHelper1").setObject3D('gh1', new THREE.GridHelper(size, divisions));
			// document.getElementById("gridHelper2").setObject3D('gh2', new THREE.GridHelper(size, divisions));
		}
	})();

	setInterval(function () {
		// shootX = raycasterXYZ.x;
		// shootY = raycasterXYZ.y;
		// shootZ = raycasterXYZ.z;

		pxy = document.getElementById("player").getAttribute('position', {});

		rand1 = Math.floor((Math.random() * 500) + 1);
		rand2 = Math.floor((Math.random() * 500) + 1);
		rand3 = Math.floor((Math.random() * 500) + 1);

		// #region S L I D E R S  ______________________________________________________ 
		var slider = document.getElementById("sliderWithValue");
		var output = slider.value;
		var view = document.getElementById("fovState");
		view.innerHTML = slider.value;
		slider.oninput = function () {
			document.getElementById("player").setAttribute('camera', { fov: output });   //    GOOD
			document.getElementById("player").flushToDOM();
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

		document.getElementById("raycaster2").flushToDOM();


	}, requestAnimationFrame);

}