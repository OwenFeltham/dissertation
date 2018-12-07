function about() {
	var x = document.getElementsByClassName("about");
	var classDesired = x[0];
	if (classDesired.style.display === "none") {
		classDesired.style.display = "block";
	} else {
		classDesired.style.display = "none";
	}
}

function hidePopover() {
	var x = document.getElementsByClassName("about");
	var classDesired = x[0];
	if (classDesired.style.display === "block") {
		classDesired.style.display = "none";
	} else {
		classDesired.style.display = "none";
	}
}

function control() {
	var x = document.getElementsByClassName("controls");
	var classDesired = x[0];
	if (classDesired.style.display === "none") {
		classDesired.style.display = "block";
	} else {
		classDesired.style.display = "none";
	}
}

function hidePopover2() {
	var x = document.getElementsByClassName("controls");
	var classDesired = x[0];
	if (classDesired.style.display === "block") {
		classDesired.style.display = "none";
	} else {
		classDesired.style.display = "none";
	}
}

window.onload = function() {
	about();
	control();
}