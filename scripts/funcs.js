function goToThis(page){
	location.assign(page);
}

function waitBeforeGo(timeSec, url){
	setInterval(function(){
							location.assign(url)
							},
							timeSec * 1000);
}

function changeBgColor(color) {
    document.body.style.backgroundColor = color;
}
