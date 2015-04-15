function addLeadingZero(to_this){
	if(to_this < 10)
		to_this = "0" + to_this;
	return to_this;
}

function writeClock(longdt){
	now = new Date();

	hour = addLeadingZero(now.getHours());
	minute = addLeadingZero(now.getMinutes());
	day = addLeadingZero(now.getDate());
	month = addLeadingZero(now.getMonth() + 1);
	
	if(longdt)
		year = addLeadingZero(now.getFullYear());

	var output = "<span id='time'>" + hour + ":" + minute + "</span>" + "<br>" + day + "-" + month;
	
	if(longdt)
		output += "-" + year;
	document.getElementById("clock").innerHTML = output;
}

function clockRoutine(longdt){
	writeClock(longdt);
	interval = setInterval(function(){
										writeClock(longdt);
										},
										10000);
}

function beginScrSaverTimeout(){
	timeoutSleep = setInterval(function(){
											location.assign("locked.html");
											},
											120000);
}
