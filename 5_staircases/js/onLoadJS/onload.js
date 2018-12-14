var exitCursor = false;

window.addEventListener('keyup', function (key) {
	if (key.which == 67) { exitCursor = false; }
});

window.addEventListener('keydown', function (key) {
	if (key.which == 67) { exitCursor = true; }
});

window.onload = function () {

	setInterval(function () {

		var fallThrough = document.getElementById("rig").getAttribute('position');
		if (fallThrough.y < -5) {
			console.log(fallThrough.y);
			document.getElementById('rig').setAttribute('position', { x: 0, y: 10.8, z: 0 });
		}

		if (exitCursor) {
			document.exitPointerLock();
		}

		//S L I D E R S 
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

		var refToDOMslider = document.getElementById("hudSlider");
		let opaNo = refToDOMslider.value;
		var opaFloat = opaNo / 200;
		var opaLevel = document.getElementById("hudState");
		opaLevel.innerHTML = refToDOMslider.value;
		refToDOMslider.oninput = function () {
			document.getElementById("curvedHUD").setAttribute('opacity', opaFloat);
			opaLevel.innerHTML = opaFloat;
		}

	}, 80);

}