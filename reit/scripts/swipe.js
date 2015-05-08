function swipeL(){
	swipePos--;
	if(swipePos < 1)
		swipePos = 4;
	document.getElementById("main_text").innerHTML = textArray[swipePos - 1];
	document.getElementById("main_logo").src = imgArray[swipePos - 1];
}

function swipeR(){
	swipePos++;
	if(swipePos > 4)
		swipePos = 1;
	document.getElementById("main_text").innerHTML = textArray[swipePos - 1];
	document.getElementById("main_logo").src = imgArray[swipePos - 1];
}

function press(){
	location.assign(linkArray[swipePos - 1]);
}
