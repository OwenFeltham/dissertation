window.onload = function () {
  
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

		console.log("startTime");
    var t = setTimeout(startTime, 500);
    
    document.getElementById('txt').innerHTML =
    hour + ":" + minute + ":" + second;
	}

	// Makes sure seconds, minutes and hours have a zero when appropriate
	function checkTime(i) {
		if (i < 10) { i = "0" + i };
		return i;
	}

startTime();

}