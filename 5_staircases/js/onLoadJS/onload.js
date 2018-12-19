var t = requestAnimationFrame;

var exitCursor = false;

window.addEventListener('keyup', function (key) {
	if (key.which == 67) { exitCursor = false; }
});

window.addEventListener('keydown', function (key) {
	if (key.which == 67) { exitCursor = true; }
});

window.onload = function () {

	setInterval(function () {

		var fallThrough = document.getElementById("player").getAttribute('position');
		if (fallThrough.y < -5) {
			console.log(fallThrough.y);
			document.getElementById('player').setAttribute('position', { x: 0, y: 10.8, z: 0 });
		}

		if (exitCursor) {
			document.exitPointerLock();
		}

		// S L I D E R S 
		var slider = document.getElementById("myRange");
		var output = slider.value;

		var view = document.getElementById("fovState");
		view.innerHTML = slider.value;
		slider.oninput = function () {
			document.getElementById("player").setAttribute('camera', { fov: output });   //    GOOD
			view.innerHTML = slider.value;
		}

		var movNums = document.getElementById("movSlider");
		var movNumVal = movNums.value;
		var moveSpeed = document.getElementById("moveState");
		moveSpeed.innerHTML = movNums.value;
		movNums.oninput = function () {
			movNums.setAttribute('value', { movNumVal });
			document.getElementById("rig").setAttribute('movement-controls', { speed: movNumVal });   //    GOOD
			moveSpeed.innerHTML = movNums.value;
		}

	}, requestAnimationFrame);

}